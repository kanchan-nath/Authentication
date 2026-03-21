import {Router } from "express"
import {
    userRegister,
    userLogin,
    userLogout,
    getUserProfile,
    deleteUserProfile,
    editUserProfile
} from "../controllers/user.controller.js"

const router = Router()

router.route("/userRegister").post(userRegister)
router.route("/userLogin").post(userLogin)
router.route("/userLogout").get(userLogout)
router.route("/getUserProfile").get(getUserProfile)
router.route("/deleteUserProfile").delete(deleteUserProfile)
router.route("/editUserProfile").patch(editUserProfile)
export default router