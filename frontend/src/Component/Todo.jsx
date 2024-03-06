import React from 'react';

function Todo(){

    const arr=[
        {   id:1,
            title:"Todo1",
            desc:"This is desc 1",
            comp:true
        },
        {
            id:2,
            title:"Todo2",
            desc:"This is desc2",
            comp:false
        }
    ]
   return (
    <>
        {
            arr.map((e)=>{
                return <>
                    <div  key={e.id}>
                    <h2>{e.title}</h2>
                    <h4>{e.desc}</h4>
                    <button>{e.comp?"Done":"Mark as done"}</button>
                    </div>
                </>
            })
        }
    </>
   )
}

export default Todo;