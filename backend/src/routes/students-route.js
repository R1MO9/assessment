import StudentService from "../services/student-service.js";
import express from "express";

const router = express.Router();

router.get("/get-students", StudentService.getStudents);
router.post("/add-students", StudentService.addStudents);

export default router;