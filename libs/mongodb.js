import mongoose from 'mongoose';
//connect to mongo database
const connectMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;