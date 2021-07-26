import React, { useState } from "react";

// const state=useState();
// console.log(state);

// let count=1;

// const IncNum=()=>{
//     count++;    //this do not work , thats why class component used. but inorder to use this we use hooks,that changes state...
//     console.log("Clicked"+count);   //here it is working i console state.
// }

const App = ()=>{

// const state=useState();
// console.log(state);
const [count,setCount]=useState(0);

// const IncNum=()=>{
//     count++;    //this do not work , thats why class component used. but inorder to use this we use hooks,that changes state...
//     console.log("Clicked"+count);   //here it is working i console state.
// }
const IncNum=()=>{
    setCount(count+10);
};
    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> ! Click Me ! </button>
        </>
    );
}

export default App;
