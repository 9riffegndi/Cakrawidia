// src/Components/Topics/TopicsList.jsx
import React from 'react';
import { useTopics } from '../../Hooks/useTopics';
import PrimaryButton from '../Buttons/PrimaryButton';

function TopicsList({onTopicSelect, className = ''  }) {
  const { topics, loading, error } = useTopics();

  if (loading) {
    return (
      <div className={`animate-pulse col-span-12 hidden md:flex  md:col-span-3 rounded-xl justify-center items-center bg-gray-200 min-h-screen ${className}`}>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p className="flex justify-center items-center  font-bold min-h-screen text-red-500">Error: {error}</p>;
  }
  
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      
      <h1 onClick={() => onTopicSelect("")} className="cursor-pointer font-bold p-2 border-b border-secondary bg-neutral text-primary rounded-t">Semua Topik</h1>

      {topics.map((topic) => (
        <li className="p-2 rounded-md hover:bg-secondary/10" key={topic.id}>
          <PrimaryButton
            onClick={() => onTopicSelect(topic.name)}
            className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary"
            label={topic.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default TopicsList;
