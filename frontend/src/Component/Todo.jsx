import React from 'react';
import '../Style/todo.css'
function Todo({todos}){

   console.log({todos})
   return (
    <>
        {
            todos.map((e)=>{
                function setState(e){
                    alert(e)
                }
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
    </>
   )
}

export default Todo;