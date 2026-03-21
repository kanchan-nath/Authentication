import express from "express"
import userRoute from "./src/routes/user.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users", userRoute)

export {app}