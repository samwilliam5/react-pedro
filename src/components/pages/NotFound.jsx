import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navs=useNavigate()

    const navhome=()=>{
        navs('/')
    }
  return (
    <div>
      <h3>404 Error Page Not Found</h3>
      <button className="btn btn-info" onClick={navhome}>Go Back To Home</button>
    </div>
  )
}

export default NotFound
