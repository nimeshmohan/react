import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white py-4'>
      user:{userid}
    </div>
  )
}

export default User
