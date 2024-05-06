import mongoose from "mongoose";


let isConnected = false
export const connectToDb = async () => {
    if(isConnected) {
    console.log("MongoDb is alraedy connected");
    return
    } 
    try {
await mongoose.connect(process.env.MONGODB_URL)
isConnected = true
console.log("MongoDb is connected");
    } catch(error) {
console.log(error);
    }
}


