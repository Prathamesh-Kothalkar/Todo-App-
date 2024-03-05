const express = require('express');
const {createTodo, createUser, updateTodo}=require('./validate');
const { Todo,User} = require('./db');
const app=express();

app.use(express.json())

app.post("/signup",async (req,res)=>{
    const userPayload=req.body;
    const userParse = createUser.safeParse(userPayload)
    if(!userParse.success){
        res.json({
            msg:"Not valid Username and Password"
        })
        return
    }
    await User.create({
        username:userPayload.username,
        password:userPayload.password
    })

    res.json({
        msg:"User register Successfully"
    })


})

app.post("/signin",(req,res)=>{

})

app.post("/todo",async (req,res)=>{
    const create = req.body;
    const pasreInfo= createTodo.safeParse(create)
    if(!pasreInfo.success){
        res.json({
            msg:"You are not providing valid values"
        })
        return
    }

    await Todo.create({
        title:create.title,
        desc:create.desc,
        completed:false
    })

    res.send("Todo added Sucessfully")

})

app.get("/todos",async (req,res)=>{
    const todos=await Todo.find({})
    res.json({
        Todos:todos
    })
})

app.put("/completed",async (req,res)=>{
    const {id}=req.body;
    const parseId=updateTodo.safeParse({id});
    if(!parseId.success){
        res.json({
            msg:"You are not providing valid values"
        }) 
    }
     await Todo.updateOne({_id:id},{completed:true})
     res.json({msg:"Updated..!"})
})

app.listen(3000,()=>{
    console.log("Server is running...")
})