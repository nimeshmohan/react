import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata] =useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(respose=>respose.json())
      .then(data=>{
        console.log(data)
        setdata(data)
      })
      
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white py-4 text-3xl flex align-middle '>
        <img src={data.avatar_url} alt="" width={300} className='mx-4' />
        Github Followers: {data.followers}
        
    </div>
  )
}

export default Github
