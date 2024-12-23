import addStudents from "./studentServices/add-students.js";
import getStudents from "./studentServices/get-students.js";

class StudentService {
    static addStudents = addStudents;
    static getStudents = getStudents;
}

export default StudentService;