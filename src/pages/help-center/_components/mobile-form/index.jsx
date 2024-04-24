import React from 'react'
import { Button } from '../../../../components/ui'

const MobileForm = () => {
  return (
    <div className="px-6">
    <div className='md:hidden block pt-10  pb-20'>
        <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="firstname" className='text-xs font-medium'>First Name</label>
                <input type="text"  className='shadow-2xl w-[380px] h-[40px] px-4' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="lastname" className='text-xs font-medium'>Last Name</label>
                <input type="text"  className='shadow-2xl w-[380px] h-[40px] px-4' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="phone" className='text-xs font-medium'>Phone Number</label>
                <input type="text"  className='shadow-2xl w-[380px] h-[40px] px-4' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xs font-medium'>Mail</label>
                <input type="email"  className='shadow-2xl w-[380px] h-[40px] px-4' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="report" className='text-xs font-medium'>Report</label>
                <textarea type="text"  className='shadow-2xl w-[380px] h-[40px] px-4' />
            </div>
            <Button children='Report' className='uppercase font-medium my-10' />
        </div>
        </div>
    </div>

  )
}

export default MobileForm