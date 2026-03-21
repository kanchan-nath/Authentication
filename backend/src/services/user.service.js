import { asyncHandler, ApiError, ApiResponse } from "../utils/utils.js"
import {User} from "../models/user.model.js"
import mongoose from "mongoose"

const createUser = async({firstName, lastName, email, password})=>{
    if(!firstName || !lastName || !email || !password){
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.create({
        fullName:{
            firstName,
            lastName,
        },
        email:email,
        password:password
    })
    console.log(user);
    console.log("Hi");
    
    return user
}
createUser("Hi", "Tata", "test@gmail.com", "password")
export {createUser}