const express=require("express");
const { createtodo, updatetodo } = require("./ype");
const { todo } = require("./db");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173/"}))
app.post("/todo",async function(req,res){
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"

        })
        return;
    }
        await todo.create({
            title:createpayload.index,
            description:createpayload.description,
            complete:false
        })
         res.json({
            msg:"todo created"
        })
});
app.get("/todo",async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })

});
app.put("/completed",async function(req,res){
    const updatepayload=req.body;
    const parsepayload=updatetodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411)({
            msg:"you sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        complete:true

    })
    res.json({
        msg:"marked as compelte"
    })
 
});
app.listen(3000);