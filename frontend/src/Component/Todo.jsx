import React from 'react';
import '../Style/todo.css'
function Todo({todos}){

   console.log({todos})
   return (
    <>
        <div className="todos">
        {
            todos.map((e)=>{
                
                return<>
                <br/>
                <div className="todo" key={e.title}>
                    <div className="title">
                        <h2>{e.title}</h2>
                    </div>
                    <div className="desc">
                        <h3>{e.desc}</h3>
                    </div>
                    <button onClick={()=>setState(e._id)}>{e.completed?"Done":"Mark as Done"}</button>
                </div>
                </>
            })
        }
        </div>
    </>
   )
   function setState(e){
    fetch("http://localhost:3000/completed",{
        method:"PUT",
        headers:{
            'Content-type':'application/json' 
        },
        body:JSON.stringify({
            id:e
        })
    })
}
}

export default Todo;