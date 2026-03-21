import {User} from "../models/user.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createUser = asyncHandler(async(req)=>{
    const {email, password} = req.body
    const {firstName, lastName} = req.body.fullName

    if(!firstName || !lastName || !email || !password){
        
    }
})