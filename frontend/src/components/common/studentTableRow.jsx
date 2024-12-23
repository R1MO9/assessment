import React from 'react';
import Avatar from '../../assets/Avatar.png';

const StudentTableRow = ({ student }) => {
    return (
        <tr className="border-t-2">
            <td className="py-2 px-4">{student.name}</td>
            <td className="py-2 px-4">{student.cohort}</td>
            <td className="py-2 px-4 flex flex-wrap gap-2">
                {student.courses.map((course, index) => (
                    <p key={index} className="bg-gray-100 px-2 py-1 font-medium rounded-md flex gap-2 items-center">
                        <img src={Avatar} alt="Profile" className="w-6 h-6 rounded-md" />
                        {course}
                    </p>
                ))}
            </td>
            <td className="py-2 px-4">{student.datejoined}</td>
            <td className="py-2 px-4">{student.lastlogin}</td>
            <td className="py-2 px-4">
                <div className={`h-5 w-5 rounded-full ${student.status === 'active' ? 'bg-green-600' : 'bg-red-600'}`}></div>
            </td>
        </tr>
    );
};

export default StudentTableRow;