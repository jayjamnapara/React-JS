import React, { useState } from 'react'

export const ChnageName = () => {
    const [Name,NewName] = useState("hello")

    const changeName = () => {
        let newName = prompt("Enter your name");
        NewName(newName)
    }

    return (
        <>
        <h1>{Name}</h1>
            <button onClick={()=>{
                changeName()
            }}>
                ChangeName
            </button>
        </>
    );
}
