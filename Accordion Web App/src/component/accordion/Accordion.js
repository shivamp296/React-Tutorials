import React, { useState } from "react";
import {questions} from "./api";
import "./accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion=()=>{

    const [data,setdata]=useState(questions);
    return (
        <>
        <section className="maindiv">
        <h1>React Interview</h1>
            {data.map((curElem)=>{
                return <MyAccordion key={curElem.id} {...curElem}/>;
            })} 
        </section>
        </>
    );
}

export default Accordion;