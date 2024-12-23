class ApiConfig {
    static BASE_URL = 'https://assessment-backend-three.vercel.app'; 

    // Students
    static GET_STUDENTS = `${ApiConfig.BASE_URL}/students/get-students`;
    static ADD_STUDENTS = `${ApiConfig.BASE_URL}/students/add-students`;
}

export default ApiConfig;