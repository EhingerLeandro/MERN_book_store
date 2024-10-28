import express from "express";
import {Book} from "../book-model.js";

const router = express.Router();

//Route for Get method, with one book
router.get("/:id", async (req, res)=>{
    const {id} = req.params;
    try{
        const getBook = await Book.findById(id);
        res.status(200).json(getBook);
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
});

//Route for post method
router.post("",  async (req, res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return response.status(400).send({
                message:"Send all required fields: title, author, publishYear",
            })}
        const newBook = {
            title: req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//Route for put method
router.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const product = req.body;
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return response.status(400).send({
                message:"Send all required fields: title, author, publishYear",
            })
        }
        const result = await Book.findByIdAndUpdate(id, product, {new:true})
        if(!result){
            return res.status(404).json({message: "Book not found"});
        }
        return res.status(200).json({message: "Book updated successfully"});
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message});
    }
})

//Router for delete method
router.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    console.log(id);
    try{
        const bookDeleted = await Book.findByIdAndDelete(id);
        if(!bookDeleted){
            return res.status(404).json({message:"Book not found"})
        }
        return res.status(200).json({message:"Book deleted successfully"})
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

export default router;