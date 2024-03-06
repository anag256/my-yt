import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //extended-to give object within obj,usually never happens url
app.use(express.static("public")); //to access public assets on local
app.use(cookieParser());


//routes import
import userRouter from'./routes/user.routes.js';

//route declaration
app.use("/users",userRouter);

export { app };
