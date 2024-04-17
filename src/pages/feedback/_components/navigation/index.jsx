import React from 'react'
import images from '../../../../constants/images'

const Navigation = () => {
  return (
  <div className='absolute top-0 w-full'>
    <div className='py-10 px-20'>
        <div className='flex justify-between'>
        <img src={images.logo} alt="" />
        <span className="text-primary font-bold">X</span>
        </div>
    </div>
    </div>
  )
}

export default Navigation