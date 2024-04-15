import { Router } from "express";
const router = Router()
import subjectroutes from "../routes/subjectRoutes.js"
import teacherRoutes from "../routes/teacherRoutes.js"

router.use("/api/subject",subjectroutes)
router.use("/api/teacher",teacherRoutes)

export default router