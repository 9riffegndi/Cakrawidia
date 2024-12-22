
import MainLayout from "../../../Layouts/MainLayout"
import GridLayout from "../../../Layouts/GridLayout"
import LeaderboardLoading from "../LeaderboadLoading"
import QuestionsListCardLoading from "../QuestionsListCardLoading"
import TopicsCategoryLoading from "../TopicsCategoryLoading"
import NavbarLoading from "../NavbarLoading"
import FooterLoading from "../FooterLoading"



export default function HomeLoading() {
    return (
        <MainLayout>
            <NavbarLoading/>
            <GridLayout>
                <TopicsCategoryLoading/>
                <QuestionsListCardLoading/>
                <LeaderboardLoading/>
            </GridLayout>
            <FooterLoading/>
        </MainLayout>
    )
}