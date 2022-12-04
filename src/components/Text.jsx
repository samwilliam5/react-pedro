import React, { useState } from 'react'

const Text = () => {

    const[input,setinput]=useState('')
  return (
    <div>
      <input type="text" placeholder='Type anything.....' onChange={(e)=>setinput(e.target.value)}/>
      <p>{input}</p>
    </div>
  )
}

export default Text
