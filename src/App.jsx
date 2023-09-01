import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function App() {

  const [data,setData]=useState([]);
  const [error,seterror]=useState("");
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>setData(res.data)).catch((error)=>{
        seterror(error.message)
      })
    })

  return (
    <>
    {error ? <p className='alert alert-danger'>{error}</p>:<p className='alert alert-success'>Record Fetched Successfully</p>}
    
    {data.map((post)=>{
      const {id,title,body}=post;
      return (
        <div className='container card m-4' key={id}>
          <div>
          <h1 className='bg-info'>{title}</h1>
          <p className='bg-dark text-white'>{body}</p>

          </div>
        
        </div>
      );
    })}
    </>
  )
}

export default App
