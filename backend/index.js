import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import { app } from "./app.js";
import {connectDB} from "./src/db/db.js"

const PORT = process.env.PORT 

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`⚙️ Server is running at port : ${PORT}`);
    })
})
.catch((error)=>{
    console.log("mongoDB connection failed !!! ", error);
    
})