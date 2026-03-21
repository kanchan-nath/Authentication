import mongoose from "mongoose"

const userShema = new mongoose.Schema({
    fullName:{
        firstName:{
            type: String,
            required: true,
            minlength: [3, "Name should be more that 3 character"]
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, "Name should be more that 3 character"]
        }
    },
    email:{
        type: String,
        required:true,
    },
    otp:{
        type: Number,
        expires: 120,
    },
    createdAt:{
        type: Date,
    },
    refreshToken:{
        type:String,
        expires: process.env.REFRESH_TOKEN_EXPIRY,
    }
}, {timestamps: true})

export const Uesr = mongoose.model("User", userShema)