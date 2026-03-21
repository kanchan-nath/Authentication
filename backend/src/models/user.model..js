import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userShema = new mongoose.Schema({
    fullName: {
        firstName: {
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
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        expires: 120,
    },
    password: {
        type: String,
        required: true,
        minlength: [3, "Password should more than 3 characters"]
    },
    createdAt: {
        type: Date,
    },
    refreshToken: {
        type: String,
        expires: process.env.REFRESH_TOKEN_EXPIRY,
    }
}, { timestamps: true })

userShema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, process.env.SALT_ROUND)
    next()
})

userShema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userShema.methods.generateRefreshToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            password: this.password
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRY
        },
    )
    return token
}

userShema.methods.generateAccessToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRY
        },
    )
    return token
}
export const Uesr = mongoose.model("User", userShema)