
import MainLayout from "../../../Layouts/MainLayout"
import GridLayout from "../../../Layouts/GridLayout"
import LeaderboardLoading from "../LeaderboadLoading"
import BreadCrumbsLoading from "../BreadCrumbsLoading"
import FooterLoading from "../FooterLoading"



export default function ViewQuestionsLoading() {
    return (
        <MainLayout>
            <BreadCrumbsLoading />
            <GridLayout>
                {/* Kolom utama */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-3 min-h-screen">
                    <div className="border h-[300px] rounded-xl  flex flex-col gap-4 p-4 animate-pulse">
                        <div className="flex gap-1 font-bold items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="w-24 h-4 bg-gray-300 rounded"></div>
                            <span className="hidden md:block w-8 h-4 bg-gray-300 rounded"></span>
                            <span className="hidden md:block w-24 h-4 bg-gray-300 rounded"></span>
                            <span className="hidden md:block w-24 h-4 bg-gray-300 rounded"></span>
                        </div>
                        <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
                        <div className="w-full h-4 bg-gray-300 rounded"></div>
                        <div className="w-full h-36 bg-gray-300 rounded"></div>
                        <div className="w-full h-16 bg-gray-400 rounded-full"></div>
                    </div>

                    {/* Jawaban */}
                    <div className="border h-[300px]  rounded-xl flex flex-col gap-4 p-4 animate-pulse">
                        <div className="w-2/3 h-10 bg-gray-300 rounded"></div>
                        <div className="w-full h-1 bg-gray-300 rounded-full animate-pulse "></div>
                        <div className="flex gap-1 font-bold items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="w-24 h-4 bg-gray-300 rounded"></div>
                            <span className="hidden md:block w-8 h-4 bg-gray-300 rounded"></span>
                            <span className="hidden md:block w-24 h-4 bg-gray-300 rounded"></span>
                            <span className="hidden md:block w-24 h-4 bg-gray-300 rounded"></span>
                        </div>
                        <div className="w-full h-36 bg-gray-300 rounded"></div>
                    </div>
                </div>

                {/* Kolom samping */}
                <LeaderboardLoading className="col-span-12 md:col-span-4" />
            </GridLayout>
            <FooterLoading />
        </MainLayout>
    )
}




