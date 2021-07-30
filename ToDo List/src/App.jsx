import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App=()=>{
    const [inputList,setinputList] = useState("Buy Apple"); //hooks

    const [items,setitems] = useState([]);  //empty array..

    const itemEvents=(e)=>{
        setinputList(e.target.value);
    }

    const listofItems=()=>{
        setitems((oldItems) => {
            return [...oldItems,inputList];
        })
        setinputList("");
    };

    const deleteitems=(id)=>{
        console.log("deleted");
        setitems((olditems)=>{
            return olditems.filter((arrElem,index)=>{ return index !== id });
        })
    }
    
    return (
    <>
        <div className="maindiv">
            <div className="centerdiv">
                <br/>
                <h1> ToDo List </h1>
                <br/>
                <input type="text" placeholder="Add a Items" onChange={itemEvents} value={inputList}/>
                <button onClick={listofItems}> + </button>
                <ol>
                    {/* <li> {inputList} </li> */}
                    {items.map((itemval,index)=>{
                        return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteitems} />
                    })}
                </ol>
            </div>
        </div>
    </>
    );
}

export default App;