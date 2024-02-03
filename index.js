//import packagees
import express from "express";
import dotenv from "dotenv";

//proess all the configuration files from  the env
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//route import
import router from "./routes/blog.js";
import { dbConnection } from "./config/database.js";

//route mount
app.use("/api/v1", router);

//db connection
dbConnection();

app.get("/", (req, res) => {
    res.send(`<h1>This is your home page</h1>`);
})

//listen to port
app.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
})