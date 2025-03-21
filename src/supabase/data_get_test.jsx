// src/App.js
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // 从 Supabase 数据库获取数据
    const fetchPets = async () => {
      const { data, error } = await supabase
        .from('owners')  // 'pets' 是你的表名
        .select('*');  // 查询所有列

      if (error) {
        console.error('Error fetching owners:', error);
      } else {
        setPets(data);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
