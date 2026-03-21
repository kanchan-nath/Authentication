import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_NAME = process.env.MONGODB_NAME

const connectDB = async()=>{
    try {
        const instance = await mongoose.connect(`${MONGODB_URI}/${MONGODB_NAME}`)
        console.log(`\n MongoDB connected !! `);
        console.log(` DB HOST: ${instance.connection.host}\n DB PORT: ${instance.connection.port}\n DB NAME: ${instance.connection.name}`);

    } catch (error) {
        console.log("mongoDB connection failed ", error);
        process.exit(1)
        
    }
}

export {connectDB}