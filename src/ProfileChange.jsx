import React, { useContext, useState } from 'react'
import { AppContext } from './App'

const ProfileChange = () => {
    const {setUser}= useContext(AppContext)


    const[input,setinput]=useState('')
const BtnChangeuser=()=>{
  setUser(input)
}
  return (
    <div>
        <input type="text" placeholder='Enter your Username... ' onChange={(e)=>setinput(e.target.value)}/>
      <button className="btn btn-dark" onClick={BtnChangeuser}>Change Profile</button>
    </div>
  )
}

export default ProfileChange
