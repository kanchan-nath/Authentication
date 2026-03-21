import mongoose from "mongoose"
import { asyncHandler } from "../utils/asyncHandler.js";
const connectDB = asyncHandler(async ()=>{
    console.log("Hello World!");
    
})

export {connectDB}