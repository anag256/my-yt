// require('dotenv').config({path:"./env"})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config({
    path:"../env"
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlEncoded({extended:true,limit:"16kb"})) //extended-to give object within obj,usually never happens url
app.use(express.static("public")) //to access public assets on local
app.use(cookieParser())
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