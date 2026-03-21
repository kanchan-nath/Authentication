import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import { app } from "./app.js";
import {connectDB} from "./src/db/db.js"

app.listen(process.env.PORT, (req, res)=>{
    connectDB(
        
    )
    
})