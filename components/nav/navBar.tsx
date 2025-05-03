import React from 'react'
import Logo from '../logo'

const NavBar = () => {
  return (
    <div className=' flex justify-between items-center w-full h-16  px-4'>
        <div><Logo/></div>
        <div className=' flex gap-4'>
            <div className=' font-cal-sans-regular'>Theme</div>
            <div>button</div>
        </div>
    </div>
  )
}

export default NavBar