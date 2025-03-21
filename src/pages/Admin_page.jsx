import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/lib/supabaseClient.js";

const Admin_page = () => {
    const { user } = useUser();
    const [users, setUsers] = useState([]);
    const [userPets, setUserPets] = useState([]);
    const [expandedUserId, setExpandedUserId] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data: usersData, error: usersError } = await supabase
                .from('owners')
                .select('*');
                if (usersError) {
                    console.error("Error fetching users:", usersError);
                } else {
                    setUsers(usersData);
                }
            } catch (error) {
                console.error("Unexpected error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const fetchUserPets = async (ownerId) => {
        try {
            const { data: petsData, error: petsError } = await supabase
                .from('pets')
                .select('name')
                .eq('owner_id', ownerId);
    
            if (petsError) {
                console.error("Error fetching pets:", petsError);
            } else {
                setUserPets(petsData);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    const toggleDetails = (userId) => {
        // console.log("Owner ID:", userId)
        setExpandedUserId(expandedUserId === userId ? null : userId);
        fetchUserPets(userId);
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
                    <li><a href="/Admin_page" style={navLinkStyles}><img src="/mypets.png" alt="my pets" style={mypetsiconStyles} />Customer list</a></li>
                    <li><a href="/appointments" style={navLinkStyles}><img src="/calendar.svg" alt="calendar" style={iconStyles} />Appointments</a></li>
                    {/* <li><a href="/profile" style={navLinkStyles}><img src="/myprofile.svg" alt="profile" style={myprofileiconStyles} />My Profile</a></li> */}
                    <li><a href="/helpcenter" style={navLinkStyles}><img src="/helpcenter.svg" alt="help" style={helpcentericonStyles} />Help Center</a></li>
                    {/* <li><a href="/logout" style={navLinkStyles}><img src="/logout.svg" alt="logout" style={iconStyles} />Logout</a></li> */}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Client</h1>
            
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    users.map((user) => (
                        <div key={user.owner_id}>
                            <div
                                className="user-panel"
                                style={userPanelStyles}
                                onClick={() => toggleDetails(user.owner_id)}
                            >
                                <div className="user-details" style={userDetailsStyles}>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone Number:</strong> {user.phone_number}</p>
                                </div>
                                <span className="arrow" style={{
                                    ...arrowStyles,
                                    transform: expandedUserId === user.owner_id ? "rotate(90deg)" : "rotate(0)"
                                }}>
                                    &#9654;
                                </span>
                            </div>

                            {expandedUserId === user.owner_id && (
                                <div className="user-details-expanded" style={expandedDetailsStyles}>
                                    <p><strong>Pets:</strong> {user.details}</p>
                                    {userPets.length > 0 ? (
                                        <ul>
                                            {userPets.map(pet => (
                                                <li key={pet.pet_id}>{pet.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No pets found.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                )}
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
const userPanelStyles = { backgroundColor: "#ffffff", border: "1px solid #ddd", padding: "15px", marginBottom: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", width: "800px" };
const expandedDetailsStyles = { flexGrow: 1 };
const userDetailsStyles = { marginBottom: "10px" };
const arrowStyles = { fontSize: "20px", cursor: "pointer", transition: "transform 0.3s" };
const editSectionStyles = { display: "block", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "8px", marginTop: "10px", width: "800px" };
const inputStyles = { width: "100%", padding: "8px", margin: "10px 0", fontSize: "14px" };
const saveButtonStyles = { backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "10px" };
const addButtonStyles = { backgroundColor: "#28a745", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "20px", fontSize: "16px" };
export default Admin_page;
