import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config()

const port = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url).catch(err => console.log("Database is not connected", err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
