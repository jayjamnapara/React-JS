import React, { useEffect, useState } from 'react'
import './Fetchdata.css';
const Fetchdata = () => {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
  },[])
  
    return (
    <>
    <h1 class="main-title"> Products </h1>
    <div class="body">
        {
            data.map((el, i)=>{
                return <div class="data">
                    <img class="img" src={el.image}/>
                    <p class="title">{el.title}</p>
                    <button class="editbtn"> Edit </button>
                    <button class="dltbtn"> Delete </button>
                </div>
            })
        }
    </div>
    </>
  )
}

export default Fetchdata