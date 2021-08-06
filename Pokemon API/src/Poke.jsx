import React, { useEffect, useState } from "react";
import axios from "axios";
import { async } from "q";

const Poke=()=>{
    const [num,setnum]=useState();
    const [name,setname]=useState();
    const [move,setmove]=useState();

    useEffect(()=>{
        // alert("!");
        async function getdata(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res.data.name);
            setname(res.data.name);
            setmove(res.data.moves.length);
        }
        getdata();
    });
    return(
        <>
        <h1> You choose <span style={{color:"red"}}>{num}</span> value.</h1>
        <h1> My name is <span style={{color:"red"}}>{name}</span>. </h1>
        <h1> I have <span style={{color:"red"}}>{move}</span> moves.</h1>
            <select value={num} onChange={(e)=>{
                setnum(e.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default Poke;