import React from "react";
import SlotM from "./SlotMach";

// const SlotM= (props)=>{
//     // let x=" :) ";
//     // let y=" :) ";
//     // let z=" :) ";

//     let x=props.x;
//     let y=props.y;
//     let z=props.z;

//     if((x===y)&&(y===z)){
//         return(
//             <>
//                 <div className="slot_inner">
//                     <h1> {x} {y} {z} </h1>
//                     <h1> This is matching ! </h1>
//                     <hr/>
//                 </div>
//             </>
//         );
//     }else{
//         return(
//             <>
//                 <div className="slot_inner">
//                     <h1> {x} {y} {z} </h1>
//                     <h1> This is not matching ! </h1>
//                     <hr/>
//                 </div>
//             </>
//         );
//     }
// }

const App = ()=>{
    return(
        <>
            <h1 className="heading_style">
                *Slot* Welcome to <span style={{color:"grey"}}>Slot Machine</span> *Slot*
            </h1>

            {/* <SlotM/>
            <SlotM/>
            <SlotM/> */ //abb teeno alag alag value ke liye...
            }
            {/* Yahaan pr props kaa istemaal */}
            <SlotM x="😄" y="😄" z="😄"/>
            <SlotM x="😢" y="😢" z="😢"/>
            <SlotM x="😢" y="🎅" z="🚣"/>
            <SlotM x=" :( " y=" :| " z=" :| "/>
        </>
    )
};

export default App;