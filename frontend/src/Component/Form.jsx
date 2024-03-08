import React, { useEffect, useState } from "react";
import '../Style/form.css'
import Todo from "./Todo";
import Navbar from "./Navbar";
function Form() {
    const [arr, setArr] = useState([])
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [createTodoFlag, setCreateTodoFlag] = useState(false);

    useEffect(() => {
        fetch("http://192.168.56.1:3000/todos")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setArr(data.Todos)
            })
    },[createTodo])
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
        if (!(title == " " && desc == " ")) {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    desc: desc
                })
            })
            .then(() => { alert("Added")
        setCreateTodoFlag(true) })
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