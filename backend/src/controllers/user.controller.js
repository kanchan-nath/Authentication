import mongoose from "mongoose";
import { asyncHandler, ApiResponse,ApiError } from "../utils/utils.js"
import { validationResult } from "express-validator"
import { createUser } from "../services/user.service.js";
const userRegister = asyncHandler(async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res
            .status(400).json({ errors: error.array() })
    }

    const { fullName, email, password } = req.body

    const user = await createUser({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password
    })
    console.log(user);
    
    return res
        .status(200)
        .json(new ApiResponse(200, user))

})

const userLogin = asyncHandler(async (req, res) => {

})

const userLogout = asyncHandler(async (req, res) => {

})

const getUserProfile = asyncHandler(async (req, res) => {

})

const deleteUserProfile = asyncHandler(async (req, res) => {

})

const editUserProfile = asyncHandler(async (req, res) => {

})


export {
    userRegister,
    userLogin,
    userLogout,
    getUserProfile,
    deleteUserProfile,
    editUserProfile,
}