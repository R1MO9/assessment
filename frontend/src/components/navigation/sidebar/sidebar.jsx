import React from "react";
import img from '../../../assets/Vector.png';
import { BsSpeedometer } from "react-icons/bs";
import { BiSolidBookContent } from "react-icons/bi";
import { RiBookMarkedLine, RiSettingsLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoHelpCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Sidebar */}
            <div
                className={`transition-transform transform h-screen bg-white text-gray-700 w-64 px-3 py-8 lg:relative fixed top-0 left-0 
                    ${isOpen ? 'lg:w-64 w-64' : 'lg:w-20 w-20'} 
                    lg:translate-x-0 lg:block ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    lg:flex-row flex-col lg:space-y-4 space-y-2 lg:items-center items-start`}
            >
                <div className="mb-12 relative">
                    <img src={img} alt="Logo" className="w-28 mx-auto" />

                    {/* Toggle button */}
                    <button
                        className="absolute top-3 right-3 text-xl font-semibold"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoClose className="text-2xl text-gray-500 hover:text-black hover:bg-gray-200" /> : <IoMenu className="text-2xl text-gray-500 hover:text-black hover:bg-gray-200 mt-5" />}
                    </button>
                </div>

                {/* Links visible when sidebar is open on mobile */}
                {isOpen && (
                    <ul className="space-y-2">
                        <Link to={'/dashboard'} className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <BsSpeedometer className="text-2xl my-auto" /> Dashboard
                        </Link>
                        <Link className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <BiSolidBookContent className="text-2xl my-auto" /> Students
                        </Link>
                        <Link className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <RiBookMarkedLine className="text-2xl my-auto" /> Chapter
                        </Link>
                        <Link className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <IoHelpCircleOutline className="text-2xl my-auto" /> Help
                        </Link>
                        <Link className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <AiOutlinePieChart className="text-2xl my-auto" /> Analytics
                        </Link>
                        <Link className="flex gap-3 p-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 text-xl rounded-md">
                            <RiSettingsLine className="text-2xl my-auto" /> Settings
                        </Link>
                    </ul>
                )}

                {/* Links for larger screens */}
                {!isOpen && (
                    <div className="lg:flex flex-col gap-4 hidden">
                        <Link to={'/dashboard'} className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <BsSpeedometer className="text-2xl my-auto" />
                        </Link>
                        <Link className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <BiSolidBookContent className="text-2xl my-auto" />
                        </Link>
                        <Link className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <RiBookMarkedLine className="text-2xl my-auto" />
                        </Link>
                        <Link className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <IoHelpCircleOutline className="text-2xl my-auto" />
                        </Link>
                        <Link className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <AiOutlinePieChart className="text-2xl my-auto" />
                        </Link>
                        <Link className="flex gap-3 py-3 font-semibold text-gray-500 hover:text-black hover:bg-gray-200 px-3 text-xl rounded-md">
                            <RiSettingsLine className="text-2xl my-auto" />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sidebar;
