import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://jayaswaroopdandamudi:cpF4wGBpzJ7o2yKC@cluster0.8esjo.mongodb.net/masked-app').then(()=>console.log("DB connected"));
}