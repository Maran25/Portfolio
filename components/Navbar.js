import React from 'react'

const Navbar = () => {
  return (
    <nav className='backdrop-blur-md z-50 flex space-x-8 justify-end pr-10 p-5 fixed w-full text-slate-500 top-0'>
      <p>Home</p>
      <p>About</p>
      <p>Skill</p>
      <p>Project</p>
      <p>Contact</p>
    </nav>
  )
}

export default Navbar
