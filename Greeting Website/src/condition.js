import React from "react";
import "./index.css";

let curDate=new Date(2021,14,12,14);
curDate = curDate.getHours();

let greeting="";

const cssstyle={};

// const cssstyle={
//   color:"green",
// };
//This is what happened next

if(curDate >= 1 && curDate<12){
    greeting="Good Morning";
    cssstyle.color = "green";
  }else if(curDate >= 12 && curDate<19){
    greeting="Good Afternoon";
    cssstyle.color = "orange";
  }else{
    greeting="Good Night !!";
    cssstyle.color = "black";
  }

function condition(){
    return (
        <div>
        <h1>Hello sir, <span style={cssstyle}>{greeting}</span></h1>
        </div>
    );
}

export default condition;