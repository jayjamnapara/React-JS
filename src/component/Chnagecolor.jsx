import React, { useState } from 'react'

function Chnagecolor() {

const [clr ,setclr] = useState("black");

const colorblue = ()=>{
    setclr("blue")
}

const colorred = ()=>{
    setclr("red")
}

const colorgreen = ()=>{
    setclr("green")
}

const coloryellow = ()=>{
    setclr("yellow")
}

  return (
    <>
        <h1 style={{color : clr}}>Color Chnage</h1>
        <button style={{color: clr, height: "35px", width: "140px", borderRadius: "5px", background: "none", backgroundColor: "white", border: "1px solid black" ,fontFamily:'revert'}} onClick={colorblue}>Change Blue</button>
        <button style={{color: clr, height: "35px", width: "140px", borderRadius: "5px", background: "none", backgroundColor: "white", border: "1px solid black" ,fontFamily:'revert'}} onClick={colorred}>Change Red</button>
        <button style={{color: clr, height: "35px", width: "140px", borderRadius: "5px", background: "none", backgroundColor: "white", border: "1px solid black" ,fontFamily:'revert'}} onClick={colorgreen}>Change Green</button>
        <button style={{color: clr, height: "35px", width: "140px", borderRadius: "5px", background: "none", backgroundColor: "white", border: "1px solid black" ,fontFamily:'revert'}} onClick={coloryellow}>Change Yellow</button>
    </>
  )
}

export default Chnagecolor