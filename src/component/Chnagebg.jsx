import React, { useState } from 'react'

const Chnagebg = () => {

    const [mode, setMode] = useState("")

    const ChnageModeDark = ()=>{
        setMode("dark")
    }

    const ChnageModeLight = ()=>{
        setMode("light")
    }

  return (
    <div style={{height:"97vh", paddingLeft: "45%", backgroundColor: mode === "dark" ? "#000" : "#fff", color: mode === "dark" ? "white" : "black"}}>
        <h1>Change Background</h1>
        <button style={{height: "50px", border:"none", width: "120px", background: mode === "dark" ? "white" : "black", color: mode === "light" ? "white" : "black", borderRadius: "5px"}} onClick={()=>{
            ChnageModeLight()
        }}>Light Mode</button>
        <button style={{height: "50px", border:"none",marginLeft: "10px", width: "120px", background: mode === "dark" ? "white" : "black", color: mode === "light" ? "white" : "black", borderRadius: "5px"}} onClick={()=>{
            ChnageModeDark()
        }}>Dark Mode</button>
    </div>
  )
}

export default Chnagebg