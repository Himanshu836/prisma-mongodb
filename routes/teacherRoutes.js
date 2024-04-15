import { Router } from "express";
import { index, store,update,destroy } from "../controllers/teacher.js";
const router =Router()

router.post("/",store)
router.get("/",index)
router.put("/:id",update)
router.delete("/:id",destroy)

export default router