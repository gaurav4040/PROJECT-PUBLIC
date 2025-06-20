import mongoose from 'mongoose';

 const connectDB=async()=>{

    try {
        const connection =await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected via mongo ${connection.connection.host}`);
    } catch (error) {
        console.log(`error connecting mongo => ${error}`);
    }
}

export default connectDB;