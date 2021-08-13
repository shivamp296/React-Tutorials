import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = ()=>{
    const [img,setimg]=useState("");
    const inputevent=(e)=>{
        const data=e.target.value;
        console.log(data);
        setimg(data);
    }
    return (
        <>
        <div className="img_show" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <div>
        <input type="text" placeholder="Search anything" onChange={inputevent} value={img}/>
        </div>
        <div>
        {img === ""? null : <Sresult name={img}/>}
        </div>
        </div>
        </>
    );
}

export default Search;