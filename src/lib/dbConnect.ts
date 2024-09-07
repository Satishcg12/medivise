import mongoose from 'mongoose';


type Connection = {
    isConnected?: number;
}

const connection : Connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log('using existing connection');
        return;
    }

        try {
            const db = await mongoose.connect(process.env.MONGODB_URI||"", {});
            connection.isConnected = db.connections[0].readyState;
            console.log('connected to db');
        } catch (err) {
            console.error("Error connecting to db: ", err);
            process.exit(1);
        }
}

export default dbConnect;