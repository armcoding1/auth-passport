import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

async function startServer() {
    const MONGO_URL = process.env.MONGO_URL;
    const PORT = process.env.PORT;
    await mongoose.connect(MONGO_URL);
    console.log("DB is connected");
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
};

startServer();