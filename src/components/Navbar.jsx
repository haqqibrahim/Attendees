import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { UserAuth } from '../context/AuthContext'

function Navbar() {
const [nav,setNav]=useState(false)
const navigate=useNavigate()
const {user,logout}=UserAuth()

const handleSignOut=async()=>{
try {
await logout()
navigate('/')
} catch (e) {
console.log(e.message)
}
}


const handleNav=()=>{
setNav(!nav)
  }
return (
<div className='rounded-div flex items-center justify-between h-20 font-bold'>
<Link to='/'>
<h1 className='text-2xl'>Attendees.</h1>
</Link>
<div className='hidden md:block'>
<ThemeToggle/>
</div>

{ user?.email?(
  <div>
    <Link to="/account" className='p-4'>Account</Link>
    <button onClick={handleSignOut}>Sign Out</button>
  </div>
  ):(
  <div className='hidden md:block'>
  <Link to='/lecturersSignIn' className='p-4 hover:text-accent'>Lecturer</Link>
  <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl '>Students</Link>
</div>  
)}


{/**Menu*/}
<div className='block md:hidden cursor-pointer z-10' onClick={handleNav}>
{nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
</div>

{/*Mobile menu*/}
<div className={nav?'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10':'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
<ul className='w-full p-4'>
<li className='border-b py-6' onClick={handleNav}><Link to="/">Home</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/">Account</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/lecturersSignIn">Lecturer</Link></li>

<li className=' py-6'><ThemeToggle/></li>
</ul>

<div className='flex flex-col w-full p-4'>
<Link to="/signin"><button onClick={handleNav} className='w-full my-2 p-3 bg-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button></Link>
<Link to="/signup"><button onClick={handleNav} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button></Link>
</div>

</div>
</div>
  )
}
export default Navbar

