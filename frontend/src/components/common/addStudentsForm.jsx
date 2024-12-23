import React, { useState } from 'react';
import addStudents from '../../actions/students/addStudents';
import Button from './button';
import notify from './notify';
import Notification from './notification';

const AddStudentsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cohort: '',
        courses: [],
        status: 'active',
    });

    const [showModal, setShowModal] = useState(false);
    const [courseInput, setCourseInput] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCourseChange = (e) => {
        setCourseInput(e.target.value);
    };

    const handleAddCourse = () => {
        if (courseInput.trim()) {
            setFormData({
                ...formData,
                courses: [...formData.courses, courseInput.trim()],
            });
            setCourseInput('');
        }
    };

    const handleRemoveCourse = (courseToRemove) => {
        setFormData({
            ...formData,
            courses: formData.courses.filter((course) => course !== courseToRemove),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await addStudents(formData);

            console.log('Student added:', formData);
            notify(data.message, 'success');

            console.log(data);

            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="p-4">
            {/* Button to open modal */}
            <Button className='bg-black text-white hover:bg-slate-900' onClick={() => setShowModal(true)}>Add Student</Button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Add Student</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                                    required
                                />
                            </div>

                            {/* Cohort */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium" htmlFor="cohort">
                                    Cohort:
                                </label>
                                <input
                                    id="cohort"
                                    type="text"
                                    name="cohort"
                                    value={formData.cohort}
                                    onChange={handleChange}
                                    placeholder="Enter cohort"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                                    required
                                />
                            </div>

                            {/* Courses */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium" htmlFor="courses">
                                    Courses:
                                </label>
                                <div className="flex">
                                    <input
                                        id="courses"
                                        type="text"
                                        value={courseInput}
                                        onChange={handleCourseChange}
                                        placeholder="Enter course"
                                        className="w-full border border-gray-300 rounded-md p-2 mt-1"
                                    />
                                    <Button
                                        type="button"
                                        onClick={handleAddCourse}
                                        className="ml-2 px-4 py-2 bg-black text-white rounded-md hover:bg-slate-900"
                                    >
                                        Add
                                    </Button>
                                </div>
                                <ul className="mt-2">
                                    {formData.courses.map((course, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{course}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveCourse(course)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Status */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium" htmlFor="status">
                                    Status:
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                                    required
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-black text-white py-2 rounded-md shadow hover:bg-slate-900"
                            >
                                Add Student
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            <Notification />
        </div>
    );
};

export default AddStudentsForm;
