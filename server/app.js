import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import storyRoutes from "./routes/stories.js";
import userRoutes from "./routes/users.js";

// PORT = 5000 in env before
const app = express()
dotenv.config();

app.use(bodyParser.json({limit: "32mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended : true}));
app.use(cors());

app.use("/stories", storyRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Instaverse API")
})

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
    } catch (err) {
        console.error("connection to MongoDB failed", err.message);
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("connection to database has been established succesfully"));
mongoose.connection.on("error", (err) => console.log(err));