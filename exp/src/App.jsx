import React, { useState } from "react";

const App=()=>{

    const [name,setname]=useState("");
    const [name1,setname1]=useState("");

    const [fullname,setfullname]=useState("");
    const [fullname2,setfullname2]=useState("");

    const anything=(e)=>{
        console.log(e.target.value);
        setname(e.target.value);
    };

    const anything1=(e1)=>{
        setname1(e1.target.value);
    };

    const onSubmitss=(e)=>{
        e.preventDefault();
        setfullname(name);
        setfullname2(name1);
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmitss}>
                    <h1>Hello {fullname} {fullname2}</h1>
                    <input type="text" placeholder="Enter your name" onChange={anything} value={name}/>
                    <br/>
                    <input type="text" placeholder="Enter your password" onChange={anything1} value={name1}/>
                    <button type="submit">Click Me 😃</button>
                </form>
            </div>
        </>
    );
};

export default App;