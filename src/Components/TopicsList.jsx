
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from '../Components/Buttons/PrimaryButton';

function TopicList({ className = '', onTopicSelect }) {
  const [topics, setTopics] = useState([]);  // Untuk menyimpan data topik
  const [loadingTopics, setLoading] = useState(true);  // Menandakan apakah data sedang di-load
  const [error, setError] = useState(null);  // Menampilkan error jika ada

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTopics = await axios.get('https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api/topics');
        setTopics(responseTopics.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loadingTopics) 
    return (
      <div className={`animate-pulse col-span-12 hidden md:flex md:col-span-3 rounded-xl justify-center items-center bg-gray-200 min-h-screen ${className}`}>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      <h1 className='font-bold border-b-2 p-2 border-secondary/30'>Topik</h1>
      <h1 className='bg-secondary text-primary p-2 font-bold rounded-md'>Semua topik</h1>
      {topics.map((topic) => (
        <li className='p-2 rounded-md hover:bg-secondary/10' key={topic.id}>
          <PrimaryButton
            onClick={() => onTopicSelect(topic.id)}  // Panggil onTopicSelect dengan ID topik
            className={'bg-transparent hover:bg-transparent text-secondary hover:text-secondary '}
            label={topic.name}
          >
          </PrimaryButton>
        </li>
      ))}
    </ul>
  );
}

export default TopicList;
