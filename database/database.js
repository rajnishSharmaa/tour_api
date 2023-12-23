import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let MONGODB_URL= process.env.MONGODB


const connect = async(req, res) =>{

    try {
        await mongoose.connect(MONGODB_URL)
        // mongoose.set('strictQuery', false);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB not connected ");
    }
}

export default connect
