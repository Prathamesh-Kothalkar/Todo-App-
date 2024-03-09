import React, { useEffect, useState } from "react";
import '../Style/form.css'
import Todo from "./Todo";
import Navbar from "./Navbar";
function Form() {
    const [arr, setArr] = useState([])
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const token = localStorage.getItem("token")

    useEffect(() => {
        console.log(token)
        fetch("http://localhost:3000/todos",{
            method:"GET",
            headers:{
                'Content-type':'application/json',
                'authorization':token
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setArr(data.Todos)
            })
    },[])
    return (
        <>
            <Navbar visible={true}/>
            <form>

                <input type="text" name="title" id="title"
                    placeholder="Enter Title" onChange={(e) => { setTitle(e.target.value) }} value={title} />

                <br />

                <input type="text" name="desc" id="desc"
                    placeholder="Enter Description" onChange={(e) => { setDesc(e.target.value) }} value={desc} />

                <br></br>
                <button onClick={(e) => { createTodo(e) }}>Add Todo</button>
            </form>
            <Todo todos={arr} />

        </>


    )

    function createTodo(e) {
        e.preventDefault();
        //const token = localStorage.getItem("token")
        if ((title && desc)) {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    'authorization':token
                },
                body: JSON.stringify({
                    title: title,
                    desc: desc
                })
            })
            .then(() => { alert("Added")
         })
            .catch((e) => console.log(e))

            setTitle("");
            setDesc("");
        }
        else {
            alert("All fields are required")
        }
    }

}

export default Form