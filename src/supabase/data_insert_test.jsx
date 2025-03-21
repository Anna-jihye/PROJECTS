import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient.js';

function AddOwnerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert new owner into the database
    const { data, error } = await supabase
      .from('Owners')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
      }]);

    if (error) {
      console.error('Error adding owner:', error);
    } else {
      console.log('Owner added:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
      />
      <button type="submit">Add Owner</button>
    </form>
  );
}

export default AddOwnerForm;
