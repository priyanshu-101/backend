// require('dotenv').config({path:'./env'})

import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()

.then (()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`\n Server is running : ${process.env.PORT }`);
    })
})