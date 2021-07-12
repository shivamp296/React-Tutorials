import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate=new Date(2021,7,12,14);
curDate = curDate.getHours();

let greeting="";

const cssstyle={};

// const cssstyle={
//   color:"green",
// };

if(curDate >= 1 && curDate<12){
  greeting="Good Morning";
  cssstyle.color = "green";
}else if(curDate >= 12 && curDate<19){
  greeting="Good Afternoon";
  cssstyle.color = "orange";
}else{
  greeting="Good Night";
  cssstyle.color = "black";
}

ReactDOM.render(
  <>
  <div>
    <h1>Hello sir, <span style={cssstyle}>{greeting}</span></h1>
  </div>
  </>
  ,document.getElementById("root")
)