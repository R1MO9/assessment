import axios from 'axios';
import ApiConfig from '../../api/config';

const getStudents = async () => {
    try {
        const res = await axios.get(ApiConfig.GET_STUDENTS);
        
        return res.data.data;
    } catch (error) {
        return error;
    }
};

export default getStudents;