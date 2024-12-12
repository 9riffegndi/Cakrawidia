// src/Components/Topics/TopicsList.jsx
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useTopics } from '../../Hooks/useTopics';

function TopicsList({ className = '', onTopicSelect }) {
  const { topics, loading, error } = useTopics();

  if (loading) {
    return (
      <div className={`animate-pulse col-span-12 hidden md:flex md:col-span-3 rounded-xl justify-center items-center bg-gray-200 min-h-screen ${className}`}>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p className="flex justify-center items-center  font-bold min-h-screen text-red-500">Error: {error}</p>;
  }
  
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      <h1 className="font-bold border-b-2 p-2 border-secondary/30">Topik</h1>
      <h1 className="bg-secondary text-primary p-2 font-bold rounded-md">Semua topik</h1>
      {topics.map((topic) => (
        <li className="p-2 rounded-md hover:bg-secondary/10" key={topic.id}>
          <PrimaryButton
            onClick={() => onTopicSelect(topic.id)}
            className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary"
            label={topic.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default TopicsList;
