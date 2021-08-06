import React, { useState } from "react";

const App=()=>{
    let Time=new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(Time);

    const updateTime=()=>{
        Time=new Date().toLocaleTimeString();
        setctime(Time);
    };

    setInterval(updateTime,1000);

    return (
        <>
            <h1>{ctime}</h1>
            {/* <button onClick={updateTime}>Get Time</button> */}
        </>
    );
};

export default App;