import Image from 'next/image'
import React from 'react'
import logoSvg from '../public/picsvg_download.svg'

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white">
      {/* <Image
        src={logoSvg}
        alt="logo"
       
        className="size-[200px] object-contain"
      /> */}
    </div>
  )
}

export default Logo