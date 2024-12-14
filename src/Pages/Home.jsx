import { useState } from "react";
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


export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleTopicSelect = (topicName) => {
        setSearchQuery(topicName); // Perbarui query pencarian berdasarkan topik
    };

    return (
        <MainLayout>
            <Navbar onSearch={setSearchQuery} />
            <GridLayout>
                <TopicsCategory  onTopicSelect={handleTopicSelect} /> {/* Kirim fungsi handler */}
                <QuestionsListCard onTopicSelect={handleTopicSelect} searchQuery={searchQuery} /> {/* Kirim state pencarian */}
                <Leaderboard />
            </GridLayout>
            <ToolipBtn />
            <Footer />
        </MainLayout>
    );
}



