import React, { useState } from "react";
import { Route,Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from "./Services";
import User from "./User";
import Search from "./Search";

const App=()=>{
    const Name=()=>{
        return <h1>Hi i m name</h1>
    }
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={()=><About name="About using Props"/>} />
            <Route exact path="/services" render={()=><Services name="Services using Props"/>}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/contact" component={()=><Contact name="Contact using Props"/>}/>
            <Route path="/contact/name" component={()=><About name="About using Props"/>}/>
            <Route path="/user/:fname" component={User}/>
            <Route component={Error}/>
        </Switch>
            {/* <About/>
            <Contact/> */}
        </>
    );
};

export default App;