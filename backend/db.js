const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/todo-app')

const todoSchema=mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean
})

const userSchema=mongoose.Schema({
    username:String,
    password:String
})


const Todo = mongoose.model("todo",todoSchema);
const User = mongoose.model("user",userSchema);

module.exports={
    Todo,
    User
}