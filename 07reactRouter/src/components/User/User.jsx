import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams();
  return (
    <div className='bg-slate-600 text-white  p-4 text-xl'>User : {userid}</div>
  )
}

export default User