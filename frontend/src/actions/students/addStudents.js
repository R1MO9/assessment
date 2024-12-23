import axios from "axios";
import ApiConfig from "../../api/config";

const addStudents = async (data) => {
    try {
        const res = await axios.post(ApiConfig.ADD_STUDENTS, data);

        return res.data.data;
    } catch (error) {
        return error;
    }
};

export default addStudents;