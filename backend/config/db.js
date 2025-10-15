import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('<mongodb-url>').then(()=>console.log("DB connected"));
}
