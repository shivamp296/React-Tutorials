import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom=(props)=>{

    const [line,setline]=useState(false);

    const cutit=()=>{
        setline(true);
    };

    return(
    <div>
        <span onClick={cutit}>
            <DeleteIcon/>
        </span>
        <li style={{textDecoration: line ? "line-through":"none"}}> {props.text} </li>
    </div> 
    );
};

export default ListCom;
