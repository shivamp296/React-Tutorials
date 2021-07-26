import React, { useState } from "react";

const App=()=>{
    let newTime=new Date().toLocaleTimeString();
    
    const [ctime,setctime]=useState(newTime);

    const UpdateTime=()=>{
        let againTime=new Date().toLocaleTimeString();
        setctime(againTime);
    };

    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );
};

export default App;