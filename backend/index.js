const express = require('express');
const {createTodo, createUser, updateTodo}=require('./validate');
const { Todo,User} = require('./db');
const cors = require('cors')
const app=express();

app.use(express.json())
app.use(cors())

app.post("/signup",async (req,res)=>{
    const userPayload=req.body;
    const userParse = createUser.safeParse(userPayload)
    if(!userParse.success){
        res.json({
            msg:"Not valid Username and Password"
        })
        return
    }
   const user= await User.findOne({
        username:userPayload.username
    })

    if(!user){
    await User.create({
        username:userPayload.username,
        password:userPayload.password
    })

    res.json({
        msg:"User register Successfully"
    })
    }
    else{
        res.json({
            msg:"Username already taken"
        })
    }


})

app.post("/signin",async (req,res)=>{
    const userPayload=req.body;
    const userParse = createUser.safeParse(userPayload);
    if(userParse.success){
        const user =await User.findOne({
        username:userPayload.username,
        password:userPayload.password
        })
        if(user){
            res.json({
                msg:true
            })
        }
        else{
            res.json({
                msg:false
            })
        }

    }
})

app.post("/todo",async (req,res)=>{
    const create = req.body;
    console.log(create)
    const pasreInfo= createTodo.safeParse(create)
    if(!pasreInfo.success){
        res.json({
            msg:"You are not providing valid values"
        })
        return
    }
    try{
        await Todo.create({
            title:create.title,
            desc:create.desc,
            completed:false
        })
        res.send("Todo added Sucessfully")
    }
    catch(err){
        console.log(err)
    }
    
   

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

app.delete("/delete",async (req,res)=>{
    const id=req.body.id;
    await Todo.deleteOne({
        _id:id
    })

    res.send("deleted")
})

app.listen(3000,()=>{
    console.log("Server is running...")
})