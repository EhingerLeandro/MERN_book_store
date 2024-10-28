import * as dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import router from "./routers/routeBooks.js";
import {Book} from "./book-model.js";
import cors from "cors";

dotenv.config();
const app = express();
//Middleware for p arsing request body
app.use(express.json());


/*In the next line a middleware is used to handle CORS POLICY*/
// 1° option allows all origins with default of cors(*)
app.use(cors());
// 2° option allows custom origins
/* 
app.use(
    cors({
        origin : "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })
)*/

//Route for get method
app.get("/", async (req, res)=>{
    try{
        const getBooks = await Book.find({});
        res.status(200).json(
            {length: getBooks.length, data:getBooks}
        );
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
});

app.use("/books", router);

/*Here it connects the app with mongodb, it uses an 
asynchronous function, thats why .then and .catch are needed*/
const uri = String(process.env.MONGODB_URL)
mongoose.connect(uri)
    .then(()=>{
        console.log("App connected to database");
        app.listen(process.env.PORT, ()=>{
            console.log(`This port: ${process.env.PORT} is listening...`)
        });
    })
    .catch((error)=>{
        console.log(`---> ${error}`)
    })