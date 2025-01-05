'use client'
import React from 'react'
import axios from 'axios'
const Sample = () => {
  const putData=async()=>{
    try {
        await axios.post('http://localhost:3000/api')
    } catch (error) {
        console.log(error)
    }
  }
  const getData=async()=>{
    try {
        await axios.get("http://localhost:3000/").then((res)=>{
            console.log(res.data)
        })
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='flex flex-col w-1/4 bg-gray-300'>
        <button onClick={putData} className='border border-solid border-black m-1 '>Put Data</button>
        <button onClick={getData} className='border border-solid border-black m-1 '>Get Data</button>
    </div>
  )
}

export default Sample