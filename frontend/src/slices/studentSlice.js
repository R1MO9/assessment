import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    students: []
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const newStudent = {
                id: nanoid(),
                name: action.payload.name,
                cohort: action.payload.cohort,
                courses: action.payload.courses,
                datejoined: action.payload.datejoined,
                lastlogin: action.payload.lastlogin,
                status: action.payload.status
            }

            state.students.push(newStudent);
        },

        removeStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload.id);
        }
    }
});

export const { addStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;