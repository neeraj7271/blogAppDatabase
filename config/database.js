import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export  function dbConnection() {

    mongoose.connect(process.env.DB_URL)
    .then(
        console.log("Database successfully connected...")
    )
    .catch((err) => {
        console.log("Error occurred while establishing the connection with db");
        process.exit(1);
    })
}
