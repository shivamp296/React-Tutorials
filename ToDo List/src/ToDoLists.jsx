import React from "react";

const ToDoLists=(props)=>{
    return( 
    <>
        {/* <div className="todo_style"> */}
        <button onClick={()=>{
            props.onSelect(props.id);
        }}>*</button>
        <li> {props.text} </li>
        {/* </div> */}
    </>
    );
}

export default ToDoLists;
