import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const {user}=useContext(UserContext)
function Profile() {
  if(!user) return <div>please Login!</div>

  return(
    <div>Welcome {user.username}</div>
  )
}

export default Profile
