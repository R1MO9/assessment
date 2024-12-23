import { configureStore } from '@reduxjs/toolkit';
import studentSlice from '../slices/studentSlice.js';

export default configureStore({
    reducer: studentSlice
});