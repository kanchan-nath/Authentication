import mongoose from "mongoose";
import {asyncHandler} from "../utils/asyncHandler.js"
import {validationResult} from "express-validator"
const userRegister = asyncHandler(async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res
        .status(400).json({errors: error.array()})
    }


})

const userLogin = asyncHandler(async(req, res)=>{

})

const userLogout = asyncHandler(async(req, res)=>{

})

const getUserProfile =asyncHandler(async(req, res)=>{

})

const deleteUserProfile = asyncHandler(async(req,res)=>{

})

const editUserProfile = asyncHandler(async(req, res)=>{

})


export {
    userRegister,
    userLogin,
    userLogout,
    getUserProfile,
    deleteUserProfile,
    editUserProfile,
}