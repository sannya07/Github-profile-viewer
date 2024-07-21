import React, { useState } from 'react'
import Viewpage from './Viewpage';

function Landingpage() {
    const [inputvalue, setinputvalue]=useState("");
    const [value,setvalue]=useState("")
    const handleinput=(event)=>{
        setinputvalue(event.target.value)
    }
    const handlebutton=()=>{
        setvalue(inputvalue)
    }
  return (
    <>
    <div className='flex-col flex w-full h-screen min-h-full bg-[#0d1116] md:flex-row'>
        <div className='flex flex-col w-full h-screen gap-4 bg-[#0d1116] justify-center items-center p-16 md:p-0 md:w-1/2 '> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className=' max-h-[450px] bg-slate-200 rounded-full border-4 ' />
            <p className='text-white text-xl'>“Build software better, together”</p>
        </div>
        <div className='flex w-full h-screen bg-[#0d1116] md:w-1/2'>
            <div className='flex flex-col relative bg-[#0d1116] justify-center gap-7 px-5'>
                <p className='text-white text-2xl md:text-4xl'>Enter the profile username you want to view: </p>
                <input type="text" placeholder=' Github Username' value={inputvalue} onChange={handleinput} className='px-2 py-2  border-white bg-slate-200 md:w-96 border-double rounded outline outline-2 outline-offset-4 outline-white' />
                <button onClick={handlebutton} className='text-white border-2 w-32 px-2 py-2 rounded bg-[#2BA44F]'> SUBMIT </button>
            </div>
        </div>
    </div>
    <Viewpage data={value}/>
    </>
  )
}

export default Landingpage
