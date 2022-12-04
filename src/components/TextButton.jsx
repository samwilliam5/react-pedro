import  axios from 'axios';
import React, { useEffect, useState } from 'react'
import Text from './Text'

const TextButton = () => {
    const[textShow,setTextShow]=useState(false)
    const[data,setData]=useState([{}])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
     .then((res)=>{
      setData(res.data)
        console.log('Component Mounted')

     },[])
    .catch((err)=>{
        console.log(err)

    })
    
        },[])
   

    const btnClick=()=>{
        setTextShow(!textShow)
    }
  return (
    <div className='my-3'>
      <button className="btn btn-success" onClick={btnClick}>Click To Show Text</button>
       {data.map((name,index)=>(
        <div key={index} className=' my-3 bg-dark text-light  w-50 mx-auto' >
       <div  className='p-3 border border-5 border-dark rounded text-start'>
        <h3>Name: {name.name}</h3>
        <h3>Username: {name.username}</h3>
        <h3>Email: {name.email}</h3>
        <h3>Phone: {name.phone}</h3>
        <h3>Website: {name.website}</h3>
        
        </div>
        </div>
       ))}
     {textShow && <Text/> } 
    </div>
  )
}

export default TextButton
