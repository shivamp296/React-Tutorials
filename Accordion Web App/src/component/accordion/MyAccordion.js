import React, { useState } from "react";

const MyAccordion=(props)=>{
    const [show,setshow]=useState(false);

    return (
        <>
            <div className="Main-heading">
                <p onClick={()=>setshow(!show)}>{show?"➖":"➕"}</p>
                <h3>{props.question}</h3>
            </div>
            {show && <p className="answers">{props.answer}</p>}
        </>
    );
};

    //  or

// const MyAccordion=({question,answer})=>{
//     return (
//         <>
//             <h1>{question}</h1>
//             <h2>{answer}</h2>
//         </>
//     );
// };

export default MyAccordion;