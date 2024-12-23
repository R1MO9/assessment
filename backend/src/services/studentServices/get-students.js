import { supabase } from '../../db/index.js';
import responseHandlers from '../../handlers/responseHandlers.js';
import errorResponseHandlers from '../../handlers/errorResponseHandlers.js';

const getStudents = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*');

        if (error) throw error;

        if (data !== null) {
            return responseHandlers(res, data, 200, 'Students retrieved successfully');
        }
    } catch (error) {
        return errorResponseHandlers(res, error, 500);
    }
};

export default getStudents;