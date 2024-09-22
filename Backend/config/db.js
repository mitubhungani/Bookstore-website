const mongoose = require('mongoose');
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async()=>{
   await  mongoose.connect(process.env.MongoDBURI);
    console.log('coonect to db');
    
}

module.exports =dbConnect;