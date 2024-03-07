import React, { useEffect, useState } from "react";
import '../Style/form.css'
import Todo from "./Todo";
function Form() {
    const [arr,setArr]= useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/todos")
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            setArr(data.Todos)
        })
    },[])
    return (
        <>
            <form>

                <input type="text" name="title" id="title"
                placeholder="Enter Title" />

                <br />

                <input type="text" name="desc" id="desc" 
                placeholder="Enter Description"/>

                <br></br>
                <button onClick={() => { alert("Hello") }}>Add Todo</button>
            </form>
            <Todo todos={arr}/>
            
        </>
    )
}

export default Form