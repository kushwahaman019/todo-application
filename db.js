const mongoose=require("mongoose");
const { Schema } = require("zod");
mongoose.connect("mongodb://localhost:27017/todo")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    complete:Boolean
})
const todo=mongoose.model('todo',todoSchema);
module.exports={
    todo
}