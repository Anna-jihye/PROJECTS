import React, { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabaseClient.js";
import { useUser } from "@clerk/clerk-react";

function CreatePetProfile() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    weight: '',
    owner_id: '',
  });
  const [loading, setLoading] = useState(true); // 添加加载状态

  useEffect(() => {
    const fetchOwnerId = async () => {
      try {
        const email = user?.emailAddresses[0]?.emailAddress;
        if (email) {
          const { data, error } = await supabase
            .from('owners')
            .select('owner_id')
            .eq('email', email)
            .single();

          if (error || !data) {
            console.error('Error fetching owner_id:', error?.message);
          } else {
            setFormData((prevData) => ({
              ...prevData,
              owner_id: data.owner_id,
            }));
          }
        }
      } catch (err) {
        console.error('Unexpected error fetching owner_id:', err);
      } finally {
        setLoading(false); // 停止加载
      }
    };

    fetchOwnerId();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.owner_id) {
      alert('Owner ID is not defined. Please make sure you are logged in.');
      return;
    }
    console.log("Data:", formData);
    const { data, error } = await supabase
      .from('pets')
      .insert([
        {
          name: formData.name,
          species: formData.species,
          breed: formData.breed,
          age: parseInt(formData.age, 10),
          weight: parseFloat(formData.weight),
          owner_id: formData.owner_id,
        },
      ]);

    if (error) {
      console.error('Error creating pet profile:', error.message);
    } else {
      alert('Pet profile created successfully!');
      setFormData({
        name: '',
        species: '',
        breed: '',
        age: '',
        weight: '',
        owner_id: formData.owner_id,
      });
    }
  };

  if (loading) return <p>Loading...</p>; // 渲染加载状态

  return (
    <div>
      <h1>Create Pet Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            step="0.1"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default CreatePetProfile;
