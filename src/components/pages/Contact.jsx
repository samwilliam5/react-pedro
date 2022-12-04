import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Contact = () => {
    const [counter,setCounter]=useState(0)
  return (
    <div>
    <h3>Contact Page  | Counter</h3>  
    <h3>{counter}</h3>
    <Button variant='primary' onClick={()=>setCounter(counter+1)}>ADD</Button>
    <Button variant='info' className='mx-3' onClick={()=>setCounter(counter-1)}>SUB</Button>
    <Button variant='success'onClick={()=>setCounter(0)}>RESET</Button>
  

    </div>
  )
}

export default Contact
