import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/lib/supabaseClient.js";

const PetsProfile = () => {
    const { user } = useUser();
    const [pets, setPets] = useState([]);
    const [expandedPetId, setExpandedPetId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false); // Controls display of add form
    const [newPet, setNewPet] = useState({
        name: "",
        species: "",
        breed: "",
        age: "",
        weight: ""
    });

    useEffect(() => {
        const fetchOwnerPets = async () => {
            try {
                const email = user?.emailAddresses[0]?.emailAddress;
                if (email) {
                    // Fetch owner's ID using the user's email
                    const { data: ownerData, error: ownerError } = await supabase
                        .from('owners')
                        .select('owner_id')
                        .eq('email', email)
                        .single();

                    if (ownerError || !ownerData) {
                        console.error("Error fetching owner ID:", ownerError);
                        return;
                    }

                    const ownerId = ownerData.owner_id;

                    // Fetch pets associated with the owner_id
                    const { data: petData, error: petError } = await supabase
                        .from('pets')
                        .select('*')
                        .eq('owner_id', ownerId);

                    if (petError) {
                        console.error("Error fetching pets:", petError);
                    } else {
                        setPets(petData);
                    }
                }
            } catch (error) {
                console.error("Unexpected error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOwnerPets();
    }, [user]);

    const toggleDetails = (petId) => {
        setExpandedPetId(expandedPetId === petId ? null : petId);
    };

    const handleInputChange = (event, petId, field) => {
        const updatedPets = pets.map((pet) =>
            pet.pet_id === petId ? { ...pet, [field]: event.target.value } : pet
        );
        setPets(updatedPets);
    };

    const handleAddPet = async () => {
        setIsAdding(true); // Optional: show a loading state if needed
        try {
            const email = user?.emailAddresses[0]?.emailAddress;
            if (!email) return;

            // Fetch owner's ID using the user's email
            const { data: ownerData, error: ownerError } = await supabase
                .from('owners')
                .select('owner_id')
                .eq('email', email)
                .single();

            if (ownerError || !ownerData) {
                console.error("Error fetching owner ID:", ownerError);
                return;
            }

            const ownerId = ownerData.owner_id;

            // Insert the new pet into the database and retrieve its ID
            const { data, error } = await supabase
                .from('pets')
                .insert({
                    ...newPet, // Spread operator to add the new pet fields
                    owner_id: ownerId, // Add the owner's ID
                    age: newPet.age ? Number(newPet.age) : null,      // Convert to number or null
                    weight: newPet.weight ? Number(newPet.weight) : null
                })
                .select('pet_id')
                .single();

            if (error) {
                console.error("Error adding new pet:", error);
            } else if (data) {
                const addedPet = { ...newPet, pet_id: data.pet_id };
                setPets([...pets, addedPet]); // Update state with new pet
                setExpandedPetId(data.pet_id); // Expand new pet for editing
                setNewPet({ name: "", species: "", breed: "", age: "", weight: "" }); // Reset form fields
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        } finally {
            setIsAdding(false); // Remove loading state
        }
    };


    const handleSaveChanges = async (petId) => {
        const pet = pets.find((pet) => pet.pet_id === petId);
        const { error } = await supabase
            .from('pets')
            .update({
                name: pet.name,
                species: pet.species,
                breed: pet.breed,
                age: pet.age,
                weight: pet.weight
            })
            .eq('pet_id', petId);
        if (error) console.error("Error updating pet:", error);
        else console.log("Changes saved for:", pet);
    };



    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            {/* Sidebar */}
            <div className="sidebar" style={sidebarStyles}>
                <ul>
                    <li>
                        <a href="/">
                            <img src="/logo.png" alt="dashboard" style={logoStyles} />
                        </a>
                    </li>
                </ul>
                {/* Back to Home */}
                <div style={backToHomeStyles}>
                    <a href="/" style={backToHomeLinkStyles}>
                        &larr; Back to home
                    </a>
                </div>
                {/* Account Settings Section */}
                <h2 style={accountSettingsHeaderStyles}>Account settings</h2>
                <ul style={navListStyles}>
                    <li><a href="/mypets" style={navLinkStyles}><img src="/mypets.png" alt="my pets" style={mypetsiconStyles} />My Pets</a></li>
                    <li><a href="/appointments" style={navLinkStyles}><img src="/calendar.svg" alt="calendar" style={iconStyles} />Appointments</a></li>
                    {/* <li><a href="/profile" style={navLinkStyles}><img src="/myprofile.svg" alt="profile" style={myprofileiconStyles} />My Profile</a></li> */}
                    <li><a href="/helpcenter" style={navLinkStyles}><img src="/helpcenter.svg" alt="help" style={helpcentericonStyles} />Help Center</a></li>
                    {/* <li><a href="/logout" style={navLinkStyles}><img src="/logout.svg" alt="logout" style={iconStyles} />Logout</a></li> */}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>My Pets</h1>

                {pets.map((pet) => (
                    <div key={pet.pet_id}>
                        <div
                            className="pet-panel"
                            style={petPanelStyles}
                            onClick={() => toggleDetails(pet.pet_id)}
                        >
                            <div className="pet-details" style={petDetailsStyles}>
                                <p><strong>Name:</strong> {pet.name}</p>
                                <p><strong>Species:</strong> {pet.species}</p>
                                <p><strong>Breed:</strong> {pet.breed}</p>
                                <p><strong>Age:</strong> {pet.age}</p>
                                <p><strong>Weight:</strong> {pet.weight} kg</p>
                            </div>
                            <span className="arrow" style={{
                                ...arrowStyles,
                                transform: expandedPetId === pet.pet_id ? "rotate(90deg)" : "rotate(0)"
                            }}>
                                &#9654;
                            </span>
                        </div>

                        {expandedPetId === pet.pet_id && (
                            <div className="edit-section" style={editSectionStyles}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter pet name"
                                    value={pet.name}
                                    onChange={(e) => handleInputChange(e, pet.pet_id, "name")}
                                    style={inputStyles}
                                />

                                <label>Species:</label>
                                <input
                                    type="text"
                                    placeholder="Enter pet species"
                                    value={pet.species}
                                    onChange={(e) => handleInputChange(e, pet.pet_id, "species")}
                                    style={inputStyles}
                                />

                                <label>Breed:</label>
                                <input
                                    type="text"
                                    placeholder="Enter pet breed"
                                    value={pet.breed}
                                    onChange={(e) => handleInputChange(e, pet.pet_id, "breed")}
                                    style={inputStyles}
                                />

                                <label>Age:</label>
                                <input
                                    type="number"
                                    placeholder="Enter pet age"
                                    value={pet.age}
                                    onChange={(e) => handleInputChange(e, pet.pet_id, "age")}
                                    style={inputStyles}
                                />

                                <label>Weight (kg):</label>
                                <input
                                    type="number"
                                    placeholder="Enter pet weight"
                                    value={pet.weight}
                                    onChange={(e) => handleInputChange(e, pet.pet_id, "weight")}
                                    style={inputStyles}
                                />

                                <button
                                    onClick={() => handleSaveChanges(pet.pet_id)}
                                    className="save-btn"
                                    style={saveButtonStyles}
                                >
                                    Save Changes
                                </button>

                            </div>
                        )}
                    </div>
                ))}

                {/* Add Pet Button */}
                <button onClick={handleAddPet} style={addButtonStyles}>+ Add Pet</button>
            </div>
        </div>
    );
};

const sidebarStyles = { width: "230px", backgroundColor: "#ffffff", padding: "20px", boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", height: "100vh" };
const backToHomeStyles = { fontSize: "16px", fontWeight: "bold", marginBottom: "40px" };
const backToHomeLinkStyles = { textDecoration: "none", color: "#007bff", fontSize: "14px", };
const accountSettingsHeaderStyles = { fontSize: "22px", color: "#333", fontWeight: "bold", marginBottom: "30px" };

const logoStyles = { width: "130px", height: "130px", marginBottom: "50px", marginLeft: "30px" }; const navListStyles = { listStyle: "none", padding: "0" };
const navLinkStyles = { textDecoration: "none", color: "#333", fontSize: "18px", fontweight: "bold", display: "flex", alignItems: "center", marginBottom: "40px" };
const iconStyles = { width: "23px", height: "30px", marginRight: "5px" };
const myprofileiconStyles = { width: "25px", height: "30px", marginRight: "5px", marginLeft: "-5px" };
const mypetsiconStyles = { width: "40px", height: "27px", marginRight: "5px", marginLeft: "-5px" };
const helpcentericonStyles = { width: "35px", height: "35px", marginRight: "5px", marginLeft: "-7px" };

const mainContentStyles = { flex: 1, padding: "40px" };
const petPanelStyles = { backgroundColor: "#ffffff", border: "1px solid #ddd", padding: "15px", marginBottom: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", width: "800px" };
const petDetailsStyles = { flexGrow: 1 };
const arrowStyles = { fontSize: "20px", cursor: "pointer", transition: "transform 0.3s" };
const editSectionStyles = { display: "block", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "8px", marginTop: "10px", width: "800px" };
const inputStyles = { width: "100%", padding: "8px", margin: "10px 0", fontSize: "14px" };
const saveButtonStyles = { backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "10px" };
const addButtonStyles = { backgroundColor: "#28a745", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "20px", fontSize: "16px" };

export default PetsProfile;
