import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_NAME = process.env.MONGODB_NAME

const connectDB = async()=>{
    try {
        const instance = await mongoose.connect(`${MONGODB_URI}/${MONGODB_NAME}`)
        console.log(instance);
        console.log(`\n MongoDB connected !! DB HOST: ${instance.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection failed ", error);
        process.exit(1)
        
    }
}

export {connectDB}