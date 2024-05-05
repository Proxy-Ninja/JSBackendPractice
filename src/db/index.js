import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB

// Assuming you're using Mongoose to connect to MongoDB
// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// async function connectDB() {
//     try {
//         const mongoURI = process.env.MONGODB_URI;
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error);
//         throw error; // Rethrow the error to handle it where connectDB() is called
//     }
// }

// export default connectDB;

