import { supabase } from '../../db/index.js';
import responseHandlers from '../../handlers/responseHandlers.js';
import errorResponseHandlers from '../../handlers/errorResponseHandlers.js';

const addStudents = async (req, res) => {
    const { name, email, cohort, courses, status } = req.body;

    try {
        const { data: existingStudent, error: findError } = await supabase
            .from('students')
            .select('email')
            .eq('email', email)
            .maybeSingle();

        if (findError) {
            return errorResponseHandlers(res, findError, 500);
        }

        if (existingStudent) {
            return errorResponseHandlers(res, new Error('Student with this email already exists'), 400);
        }

        const response = await supabase
            .from('students')
            .insert([
                {
                    name,
                    email,
                    cohort,
                    courses: courses || [],
                    status: status || 'active',
                    datejoined: new Date(),
                }
            ]);

        return responseHandlers(res, { message: 'Student added successfully', data: response.data }, 201);
    } catch (error) {
        return errorResponseHandlers(res, error, 500);
    }
};

export default addStudents;
