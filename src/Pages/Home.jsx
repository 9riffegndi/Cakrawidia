import { useState } from "react";


// Layouts
import MainLayout from "../Layouts/MainLayout"
import GridLayout from "../Layouts/GridLayout"


//partials 
import Navbar from "../Partials/Navbar"
import Footer from "../Partials/Footer"

// Components
import TopicsCategory from "../Components/TopicsCategory"
import QuestionsListCard from "../Components/QuestionsListCard"
import Leaderboard from "../Components/Leaderboard"



// Buttons
import ToolipBtn from "../Components/Buttons/ToolipBtn"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    return (
        <MainLayout>
            
            <Navbar onSearch={setSearchQuery} />

            <GridLayout>

                <TopicsCategory />
                
                <QuestionsListCard searchQuery={searchQuery} />
                
                <Leaderboard />

                </GridLayout>
            
            <ToolipBtn />
            
            <Footer />
        
        </MainLayout>
    )    
}