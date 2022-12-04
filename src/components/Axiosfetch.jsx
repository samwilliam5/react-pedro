
import { Axios } from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Axiosfetch = () => {
 const[data,setdata]=useState('')

 const FetchHandle=(excuse)=>{
  Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
  .then((res)=>{
setdata(res.data[0].excuse)
  },)
 }

  return (
    <>
    <div >
       <Button  variant="primary" onClick={()=>FetchHandle('party')}>Party</Button>
      <Button className='mx-3' variant="secondary" onClick={()=>FetchHandle('gaming')}>Gaming</Button>
      <Button variant="success"  onClick={()=>FetchHandle('funny')}>Funny</Button>
      <h3>{data}</h3>
    </div>
    <hr />
    </>
  )
}

export default Axiosfetch
