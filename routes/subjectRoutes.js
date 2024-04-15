import {Router} from "express"
import {destroy, index, store, update} from "../controllers/subject.js"
const router = Router()

router.post("/",store)
router.get("/",index)
router.put("/:id",update)
router.delete("/:id",destroy)

export default router