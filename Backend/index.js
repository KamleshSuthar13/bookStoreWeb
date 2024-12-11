import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('Error: ', error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
