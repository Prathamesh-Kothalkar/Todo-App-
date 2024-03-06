import React from "react";
import '../Style/form.css'
function Form() {
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
        </>
    )
}

export default Form