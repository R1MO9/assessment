class ApiConfig {
    static BASE_URL = 'http://localhost:5000'; 

    // Students
    static GET_STUDENTS = `${ApiConfig.BASE_URL}/students/get-students`;
    static ADD_STUDENTS = `${ApiConfig.BASE_URL}/students/add-students`;
}

export default ApiConfig;