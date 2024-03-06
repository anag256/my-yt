// require('dotenv').config({path:"./env"})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:"../env"
})


// (async()=>{
//     try{
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }
//     catch(e){
//         console.error("error:",e);
//     }
// })()


connectDB()
.then(()=>{

    app.listen(process.env.PORT | 8000,()=>{
        console.log(`Server is listening on port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo DB connection failed",err)
})