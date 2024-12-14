import React, { useState } from "react";

// Layouts
import MainLayout from "../Layouts/MainLayout";
import GridLayout from "../Layouts/GridLayout";

// Partials
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";

// Components
import TopicsCategory from "../Components/Topics/TopicsCategory";
import QuestionsListCard from "../Components/Questions/QuestionsListCard";
import Leaderboard from "../Components/Leaderboard/Leaderboard";

// Buttons
import ToolipBtn from "../Components/Buttons/ToolipBtn";

// Custom Hook
import { useFetchAllData } from "../Hooks/useFetchAllData";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useFetchAllData(); // Mengambil semua data

  const handleTopicSelect = (topicName) => {
    setSearchQuery(topicName); // Perbarui query pencarian berdasarkan topik
  };

  if (loading) {
    return <div className="loading">Loading...</div>; // Tampilkan loading state
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>; // Tampilkan error
  }

  return (
    <MainLayout>
      <Navbar onSearch={setSearchQuery} />
      <GridLayout>
        <TopicsCategory topics={data.topics} onTopicSelect={handleTopicSelect} /> {/* Kirim data topik */}
        <QuestionsListCard
          questions={data.questions}
          searchQuery={searchQuery}
          onTopicSelect={handleTopicSelect}
        /> {/* Kirim data pertanyaan dan query pencarian */}
        <Leaderboard users={data.users} /> {/* Kirim data pengguna */}
      </GridLayout>
      <ToolipBtn />
      <Footer />
    </MainLayout>
  );
}
