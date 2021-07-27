import React, { useState } from "react";

const App=()=>{

    const [fullname,setfullname]=useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    const onSubmitss=(e)=>{
        e.preventDefault();
        alert("form submitted");
    }

    const inputEvent = (e)=>{
        // const value=e.target.value;
        // const name=e.target.name;

        const {value,name}=e.target;
        console.log(value);
        console.log(name);

        setfullname((preValue)=>{
            // console.log(preValue);
            if(name==="fname"){
                return {
                    fname : value,
                    lname : preValue.lname,
                    email : preValue.email,
                    phone : preValue.phone
                } 
            }else if(name==="lname"){
                return {
                    fname: preValue.fname,
                    lname: value,
                    email : preValue.email,
                    phone : preValue.phone
                }
            }else if(name==="email"){
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email : value,
                    phone : preValue.phone
                }
            }else{
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email : preValue.email,
                    phone : value,
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
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>

                    <input type="text" placeholder="Enter your first name" name="fname" onChange={inputEvent} value={fullname.fname}/>
                    <br/>
                    <input type="text" placeholder="Enter your last name" name="lname" onChange={inputEvent} value={fullname.lname}/>
                    <br/>
                    <input type="email" placeholder="Enter your email" name="email" onChange={inputEvent} value={fullname.email}/>
                    <br/>
                    <input type="text" placeholder="Enter your phone" name="phone" onChange={inputEvent} value={fullname.phone}/>
                    <br/>
                    <button type="submit">Click Me 😃</button>
                </form>
            </div>
        </>
    );
};

export default App;