import ProfileChange from '../../ProfileChange'
import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { useParams } from 'react-router-dom'


const Profile = () => {

  let {username} = useParams()
    const {user}= useContext(AppContext)

  return (
    <div>
      Profile View  {username}
   <h3> {user}</h3>
      <ProfileChange />
    </div>
  )
}

export default Profile
