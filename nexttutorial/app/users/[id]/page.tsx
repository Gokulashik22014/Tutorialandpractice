'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const UserData = () => {
    const data=useParams()
  return (
    <div>
      <h1>{data.id}</h1>
    </div>
  )
}

export default UserData
