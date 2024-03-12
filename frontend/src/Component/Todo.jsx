import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import '../Style/todo.css'
function Todo({ todos }) {

    const token = localStorage.getItem("token")

    function setState(e) {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                id: e
            })
        })
    }

    function deletedTodo(e) {
        fetch("http://localhost:3000/delete", {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                id: e
            })
        })
            .then(() => {
                alert("Removed..!")
            }
            )
            .catch((err) => console.log(err))
    }
    
    return (
        <>
            <div className="todos">
                {
                    todos.map((e) => {

                        return <>
                            <br />
                            <div className="todo" key={e._id}>
                                <CiCircleRemove fontSize={"3em"}
                                    cursor={"pointer"}
                                    onClick={() => { deletedTodo(e._id) }} />
                                <div className="title">
                                    <h2>{e.title}</h2>
                                </div>
                                <div className="desc">
                                    <h3>{e.desc}</h3>
                                </div>
                                <button onClick={() => setState(e._id)}>{e.completed ? "Done" : "Mark as Done"}</button>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )


}

export default Todo;