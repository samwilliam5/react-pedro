import React, { useContext } from 'react'
import { AppContext } from '../../App'
const Home = () => {
  const {user}= useContext(AppContext)
  return (
    <div>
      Welcome To Home  <h3>{user}</h3> 
    </div>
  )
}

export default Home
