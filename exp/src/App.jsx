import React, { useState } from "react";

const App=()=>{

    const [name,setname]=useState("");

    const [fullname,setfullname]=useState();

    const anything=(e)=>{
        console.log(e.target.value);
        setname(e.target.value);
    };

    const onSubmit=()=>{
        setfullname(name);
    }

    return (
        <>
            <div>
                <h1>Hello {fullname}</h1>
                <input type="text" placeholder="Enter your name" onChange={anything} value={name}/>
                <button onClick={onSubmit}>Click Me 😃</button>
            </div>
        </>
    );
};

export default App;