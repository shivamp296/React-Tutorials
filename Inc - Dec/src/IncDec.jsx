import React, { useState } from "react";

const IncDec=()=>{
    const [num,setnum]=useState(0);

    const incNum=()=>{
        setnum(num+1);
    }
    const decNum=()=>{
        if(num>0){
            setnum(num-1);
        }else{
            alert("Sorry zero limit reached !");
            setnum(0);
        }
    }
    return (
        <>
            <div className="maindiv">
                <div className="centerdiv">
                    <h1> {num} </h1>
                    <div className="buttondiv">
                        <button onClick={incNum}> Inc </button>
                        <button onClick={decNum}> Dec </button>
                    </div>     
                </div>
            </div>
        </>
    );
}

export default IncDec;