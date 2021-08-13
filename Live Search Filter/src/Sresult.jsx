import React from "react";

const Sresult=(props)=>{
    const img1=`https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <div>
                <img src={img1} alt="search"/>
            </div>
        </>
    );
}

export default Sresult;