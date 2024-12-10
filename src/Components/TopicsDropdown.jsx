import React, { useEffect, useState } from "react";
import axios from "axios";

const TopicsDropdown = () => {
  const [topics, setTopics] = useState([]); // State untuk menyimpan data topics
  const [selectedTopic, setSelectedTopic] = useState(""); // State untuk menyimpan topik yang dipilih

  useEffect(() => {
    // Fetch data dari API menggunakan Axios
    axios
      .get("https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api/topics") // Ganti dengan endpoint API Anda
      .then((response) => {
        setTopics(response.data); // Simpan data topics ke state
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <select
      className="select-md w-max bg-secondary/10 rounded-full"
      value={selectedTopic}
      onChange={(e) => setSelectedTopic(e.target.value)}
    >
      <option className="font-bold" disabled value="">
        Pilih kategori topik
      </option>
      {topics.map((topic) => (
        <option key={topic.id} value={topic.id}>
          {topic.name}
        </option>
      ))}
    </select>
  );
};

export default TopicsDropdown;
