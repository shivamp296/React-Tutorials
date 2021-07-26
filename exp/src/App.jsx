import React, { useState } from "react";

const App=()=>{
    const purple = "#8e44ad";
    const [bg,setbg]=useState(purple);

    const [name,setname]=useState("Shivam 😎");

    const func=()=>{
        // console.log("Clicked me !"); 
        let newBg="yellow";
        setbg(newBg); 
        setname("Patel 😃");    
    }

    const func1=()=>{
        setbg("black");
        setname("is a smart boy 👦");
    };

    return (
        <>
        <div  style={{backgroundColor:bg}}>
            <button onClick={func} onDoubleClick={func1}>{name}</button>
        </div>
        </>
    );
};

export default App;