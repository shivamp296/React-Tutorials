import React, { useState } from "react";

const App=()=>{

    const [fullname,setfullname]=useState({
        fname: "",
        lname: ""
    });

    const onSubmitss=(e)=>{
        e.preventDefault();
        alert("form submitted");
    }

    const inputEvent = (e)=>{
        const value=e.target.value;
        const name=e.target.name;
        console.log(value);
        console.log(name);

        setfullname((preValue)=>{
            // console.log(preValue);
            if(name==="fname"){
                return {
                    fname : value,
                    lname : preValue.lname,
                } 
            }else{
                return {
                    fname: preValue.fname,
                    lname: value,
                }
            }
        });
        // setname(e.target.value);
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmitss}>
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <input type="text" placeholder="Enter your name" name="fname" onChange={inputEvent} value={fullname.fname}/>
                    <br/>
                    <input type="text" placeholder="Enter your password" name="lname" onChange={inputEvent} value={fullname.lname}/>
                    <button type="submit">Click Me 😃</button>
                </form>
            </div>
        </>
    );
};

export default App;