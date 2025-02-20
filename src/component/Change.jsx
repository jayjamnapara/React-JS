import React, { useState } from 'react'
import Chnagecolor from './Chnagecolor'

const Change = () => {
  
    const [color,setColor] = useState("light")
    const Chnagecolor = ()=>{
        
        setColor(prvcolor => prvcolor === "light" ? "dark" : "light")
        // setColor(true)
    }

    
    return (
    <>
        <div style={{height:"100vh", backgroundColor: color ==="light" ? "white" : "black", color: color === "light" ? "black" : "white"}}>
            <h1>Hello Devlopers.....!</h1>
            <button onClick={()=>{Chnagecolor()}}> change </button>
        </div>
    </>
  )
}

export default Change