import { useState } from "react";
import LabelButton from "./LabelButton";
import { Link } from "react-router-dom";

export default function HamburgerButton() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    const handleClose = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="flex md:hidden">
            <div className="dropdown dropdown-bottom dropdown-end">
                <button className="btn  btn-circle btn-neutral swap swap-rotate" onClick={handleToggle}>
                    {/* hamburger icon */}
                    {!isDropdownOpen ? (
                        <svg
                            className="swap-rotate fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                    ) : (
                        /* close icon */
                        <svg
                            className="swap-active  fill-current "
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    )}
                </button>

                {isDropdownOpen && (
                    <div
                        tabIndex={0}
                        className="dropdown-content menu bg-primary rounded-box z-[1] w-max p-2 shadow"
                    >
                        <ul className="flex items-end justify-end flex-col gap-2">
                            
                            <Link className="flex items-center justify-end w-full p-1 rounded-lg gap-1"
                                to="/UsersLeaderboard"
                                >
                                
                                <p className="text-[0.6rem] font-semibold">Leaderboard</p>
                                <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=ydwlBL9IcMJd&format=png&color=FAB005" />
                            
                            </Link>
                            
                            <div className="flex items-center justify-end  p-1 rounded-lg gap-1">
                                <p className="text-[0.6rem] font-semibold">Ajukan pertanyaan </p>
                                <LabelButton
                                    src="https://img.icons8.com/?size=100&id=Li1YuxryCXFK&format=png&color=FFFFFF"
                                    htmlFor="my_modal_6"
                                    className="btn btn-sm btn-circle ">
                                </LabelButton>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
