import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link href={"/users"}>To usre</Link>
    </div>
  )
}

export default Home
