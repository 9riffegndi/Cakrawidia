import React from 'react';
import { useTopics } from '../../Hooks/useTopics'; 

const TopicsDropdown = ({ onSelect, defaultLabel = "Pilih kategori topik" }) => {
  const { topics, loading, error } = useTopics(); 

  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
        <div className="w-full">
          <select 
            defaultValue={1} // Mengatur nilai default yang dipilih
            className="select-md w-full bg-secondary/10 rounded-full"
            onChange={handleChange}
          >
            <option disabled value="">
              {defaultLabel}
            </option>
            {loading ? (
              <option disabled>Loading...</option>
            ) : error ? (
              <option disabled>{error}</option>
            ) : (
              topics.map((topic) => (
                <option 
                  key={topic.id} 
                  value={topic.id} 
                >
                  {topic.name}
                </option>
              ))
            )}
          </select>
        </div>

  );
};

export default TopicsDropdown;
