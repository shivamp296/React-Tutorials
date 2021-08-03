import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";

const ToDoLists=(props)=>{
    const [item,setitem]=useState("");
    const [newitem,setnewitem]=useState([]);    //empty array 

    const itemEvent=(e)=>{
        setitem(e.target.value);
    };

    const listofitems=()=>{
        setnewitem((prevalue)=>{
            return [...prevalue,item];
        });
        setitem("");
    }

    return( 
    <>
        <div className="maindiv">
            <div className="centerdiv">
                <h1> ToDo List </h1>
                <input type="text" value={item} placeholder="Add an Items" onChange={itemEvent} />
                <Button className="newBtn" onClick={listofitems}><AddIcon/></Button>
                <br/>
                    <ol>

                        {/* <li> {item} </li> */}

                        {newitem.map((val,index)=>{
                            return <ListCom key={index} text={val}/>;
                        })}

                    </ol>
            </div>
        </div>
    </>
    );
}

export default ToDoLists;
