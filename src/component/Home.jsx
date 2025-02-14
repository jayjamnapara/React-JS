import React, { useState } from 'react'
import About from './About'

function Home(props) {
  
    const [count,setCount] = useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }
  
    return (
        <>
    <div> 
        <button onClick={()=>{
            increment()
        }}>Increment</button>
        <button onClick={()=>{
            decrement()
        }}>Decrement</button>
    </div>
    <About data={count}></About>
        </>
  );
}

export default Home