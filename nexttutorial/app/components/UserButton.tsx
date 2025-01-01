'use client'
import Link from 'next/link'
import React from 'react'
interface Props{
    id:number
}
const UserButton = ({id}:Props) => {
  return (
    <div>
      <Link href={`/users/${id}`}>To user page</Link>
    </div>
  )
}

export default UserButton
