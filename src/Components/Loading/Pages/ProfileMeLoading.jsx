import MainLayout from '../../../Layouts/MainLayout';
import BreadCrumbsLoading from '../BreadCrumbsLoading';
import FooterLoading from '../FooterLoading';

export default function ProfileMeLoading() {
    return (
        <MainLayout className="justify-center items-center">
            <BreadCrumbsLoading />
            {/* Profile Header */}
            <div className="flex flex-col bg-gray-200 animate-pulse md:flex-row justify-center items-center p-2 gap-3 w-full min-h-[170px]">
                <div className="w-[150px] h-[150px] bg-gray-300 animate-pulse rounded-full"></div>
                <div className="flex font-bold flex-col items-center md:items-start">
                    <div className="w-[200px] h-[20px] bg-gray-300 animate-pulse rounded mb-2"></div>
                    <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
                </div>
            </div>

            <div className="w-full flex  justify-center items-center mt-4">
                <span className='w-1/5 animate-pulse rounded-xl bg-gray-300 h-[29px]'></span>
            </div>

            {/* Profile Details */}
            <div className="w-full mt-4 flex justify-center grow p-2 min-h-[500px]">
                <div className="flex flex-col gap-4 justify-center items-center w-[95%] md:w-[50%] h-full">
                    {/* User Points, Role, and ID */}
                    <div className="flex w-full justify-between items-center">
                        <div className="min-h-[80px] justify-center grow flex items-center flex-col">
                            <div className="w-[60px] h-[20px] bg-gray-300 animate-pulse rounded mb-2"></div>
                            <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
                        </div>
                        <div className="min-h-[80px] justify-center grow flex items-center flex-col">
                            <div className="w-[60px] h-[20px] bg-gray-300 animate-pulse rounded mb-2"></div>
                            <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
                        </div>
                        <div className="min-h-[80px] justify-center grow flex items-center flex-col">
                            <div className="w-[60px] h-[20px] bg-gray-300 animate-pulse rounded mb-2"></div>
                            <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center  items-center mt-2">
                        <span className='w-full animate-pulse bg-gray-300 h-[2px] rounded-full'></span>
                    </div>
                    {/* Email and Joining Date */}
                    <div className="flex  flex-col justify-center gap-2 items-start w-full">
                        <div className="w-1/2 h-[20px] bg-gray-300 animate-pulse rounded mb-2"></div>
                        <div className="w-full h-[20px] bg-gray-300 animate-pulse rounded"></div>
                    </div>

                    {/* Edit Profile */}
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className=" flex justify-center animate-pulse items-center collapse-title bg-neutral rounded-xl text-primary font-bold text-center peer-checked:rounded-b-none peer-checked:bg-secondary peer-checked:text-secondary-content"></div>
                        <div className="flex-col gap-2 collapse-content mb-3 rounded-b w-full flex peer-checked:border border-secondary text-primary-content peer-checked:text-secondary-content">
                            <div className="w-full h-[60px] bg-gray-300 animate-pulse rounded mt-2"></div>
                            <div className="w-full h-[60px] bg-gray-300 animate-pulse rounded mt-2"></div>
                            <div className="w-full h-[60px] bg-gray-300 animate-pulse rounded mt-2"></div>
                            <div className="w-full h-[60px] bg-neutral animate-pulse rounded mt-2"></div>\
                        </div>
                    </div>

                    {/* Logout Button */}
                    <div className="w-full h-[50px] bg-gray-300 animate-pulse rounded-xl mb-3"></div>

                    {/* Delete Account */}
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="flex justify-center items-center animate-pulse collapse-title bg-error rounded-xl text-primary font-bold text-center peer-checked:rounded-b-none peer-checked:bg-secondary peer-checked:text-secondary-content"></div>
                        <div className="flex-col gap-2 collapse-content mb-3 rounded-b w-full flex peer-checked:border border-secondary text-primary-content peer-checked:text-secondary-content">
                            <div className="w-full h-[60px] bg-gray-300 animate-pulse rounded mt-2"></div>
                            <div className="w-full h-[60px] bg-error animate-pulse rounded mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLoading/>
        </MainLayout>
    );
}
