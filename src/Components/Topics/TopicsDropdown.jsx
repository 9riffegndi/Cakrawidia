import React from 'react';
import { useTopics } from '../../Hooks/useTopics'; 

const TopicsDropdown = ({ onSelect }) => {
  const { topics, loading, error } = useTopics();

  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="w-full">
      <select 
        className="select-md w-full bg-secondary/10 rounded-full"
        onChange={handleChange}
        defaultValue="" // Default to the placeholder option
      >
        <option selected >
          Pilih kategori topik
        </option>
        {loading ? (
          
          <option value="" disabled>Loading...</option>

        ) : error ? (
          <option value="" disabled>{error}</option>
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
