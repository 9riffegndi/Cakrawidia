import { useState, useEffect } from "react";
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

// Services
import { fetchUsers } from "../Services/leaderboardService";
import { fetchTopics } from "../Services/topicService";
import { fetchQuestions } from "../Services/questionService";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Load data dari semua API secara bersamaan
        const [usersRes, topicsRes, questionsRes] = await Promise.all([
          fetchUsers(),
          fetchTopics(),
          fetchQuestions(),
        ]);

        // Proses data sesuai kebutuhan
        const sortedUsers = usersRes.sort((a, b) => b.points - a.points); // Sorting leaderboard
        const enrichedQuestions = questionsRes.map((question) => {
          const topic = topicsRes.find((t) => t.id === question.topic_id);
          return {
            ...question,
            topic_name: topic ? topic.name : "Unknown",
            user_name: question.user ? question.user.username : "Unknown",
          };
        });

        // Set data ke state
        setUsers(sortedUsers);
        setTopics(topicsRes);
        setQuestions(enrichedQuestions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Loading atau Error State
  if (loading) return <div className="flex items-center justify-center h-screen bg-gray-200"><span className="loading loading-infinity loading-lg"></span></div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <MainLayout>
      <Navbar onSearch={setSearchQuery} />
      <GridLayout>
        {/* Kirim data topics ke TopicsCategory */}
        <TopicsCategory topics={topics} onTopicSelect={setSearchQuery} />

        {/* Kirim data questions ke QuestionsListCard */}
        <QuestionsListCard
          questions={questions}
          users={users}
          onTopicSelect={setSearchQuery}
          searchQuery={searchQuery}
        />

        {/* Kirim data users ke Leaderboard */}
        <Leaderboard users={users} />
      </GridLayout>
      <ToolipBtn />
      <Footer />
    </MainLayout>
  );
}



