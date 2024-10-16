import mongoose from "mongoose";

const mongoUri = 'mongodb://localhost:27017/reservation';
export async function connect(){
    try {        
        await mongoose.connect(mongoUri)
    } catch (error) {
       console.error('error connecting to the mongodb');
       console.error(error) 
    }
}

