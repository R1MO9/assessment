import React, { useEffect } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiEqualizer2Line } from "react-icons/ri";
import Avatar from '../assets/Avatar.png';
import StudentTableRow from '../components/common/studentTableRow';
import AddStudentsForm from '../components/common/addStudentsForm';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../slices/studentSlice';
import getStudents from '../actions/students/getStudents';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [students, setStudents] = React.useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await getStudents();
                dispatch(addStudent(response));
                setStudents(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudents();
    }, []);


    return (
        <div className="flex flex-col md:flex-row w-full h-full">
            <div className="flex-1 p-4 sm:p-6 bg-gray-100">
                {/* Search Box */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between py-4">
                    <input
                        type="text"
                        placeholder="Search your course"
                        className="focus:outline-none bg-white w-full md:w-2/5 p-4 rounded-xl"
                    />

                    <div className="flex justify-between gap-4 md:gap-6 items-center w-full md:w-fit">
                        <FiHelpCircle className="text-2xl md:text-3xl text-slate-500" />
                        <LuMessageSquareMore className="text-2xl md:text-3xl text-slate-500" />
                        <RiEqualizer2Line className="text-2xl md:text-3xl text-slate-500" />
                        <IoNotificationsOutline className="text-2xl md:text-3xl text-slate-500" />

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src={Avatar} alt="Profile"
                                className="w-10 h-10 rounded-md"
                            />
                            <span className="block text-lg md:text-xl font-semibold text-gray-800">
                                Adeline H. Dancy
                            </span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">

                    {/* Filter & Add New Student Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <div className="flex flex-row gap-4 sm:gap-8 items-center">
                            {/* Cohort Select */}
                            <div className="flex gap-4 items-center">
                                <select className="bg-gray-200 font-semibold text-[#3F526E] px-4 py-2 rounded-md w-full sm:w-auto">
                                    <option value="AY 2024-25">AY 2024-25</option>
                                    <option value="AY 2023-24">AY 2023-24</option>
                                    <option value="AY 2022-23">AY 2022-23</option>
                                </select>
                            </div>

                            {/* Course Select */}
                            <div className="flex gap-4 items-center">
                                <select className="bg-gray-200 font-semibold text-[#3F526E] px-4 py-2 rounded-md w-full sm:w-auto">
                                    <option value="CBSE 9 Science">CBSE 9 Science</option>
                                    <option value="CBSE 9 Math">CBSE 9 Math</option>
                                    <option value="CBSE 9 English">CBSE 9 English</option>
                                </select>
                            </div>
                        </div>

                        <AddStudentsForm />
                    </div>

                    {/* Table with horizontal scroll on small screens */}
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="text-left py-2 px-4">Student Name</th>
                                    <th className="text-left py-2 px-4">Cohort</th>
                                    <th className="text-left py-2 px-4">Courses</th>
                                    <th className="text-left py-2 px-4">Date Joined</th>
                                    <th className="text-left py-2 px-4">Last Login</th>
                                    <th className="text-left py-2 px-4">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {students.map((student, index) => (
                                    <StudentTableRow key={index} student={student} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
