import {Router } from "express"
import {
    userRegister,
    userLogin,
    userLogout,
    getUserProfile,
    deleteUserProfile,
    editUserProfile
} from "../controllers/user.controller.js"
import {body} from "express-validator"

const router = Router()

router.route("/userRegister").post(
    [
        body("fullName.firstName").trim().isLength({min:3}).withMessage("First name should more than 3 character"),
        body("email").isEmail().withMessage("Invalid Message"),
        body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long')
    ],
    userRegister)
router.route("/userLogin").post(userLogin)
router.route("/userLogout").get(userLogout)
router.route("/getUserProfile").get(getUserProfile)
router.route("/deleteUserProfile").delete(deleteUserProfile)
router.route("/editUserProfile").patch(editUserProfile)
export default router