import React from "react";
import { useParams,useLocation,useHistory } from "react-router";

// const User=({match})=>{
//     return (
//         <h1> User {match.params.fname} page </h1>
//     );
// };

const User=()=>{
    const {fname} = useParams();
    const location=useLocation();
    const history=useHistory();
    console.log(history);
    return (
        <>
        <h1> User {fname} page. </h1>
        <p> My location is {location.pathname} </p>
        {location.pathname === `/user/vinod/thapa` ? <button onClick={()=>history.goBack()}> Click Me </button> : null}
        </>
    );
};

export default User;