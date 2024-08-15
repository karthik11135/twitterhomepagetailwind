import React from 'react'
import ProfilePic from './ProfilePic'
import Button from './Button'

const UserProfile = () => {
  return (
    <div className='flex gap-2 px-2 mb-3'>
        <div>
            <ProfilePic />
        </div>
        <div>
            <h3 className='text-white text-md'>karthik</h3>
            <p className='text-searchplaceholder text-sm'>@capitalone.com</p>
        </div>
        <div className='ms-auto'>
            <Button className={"bg-white py-1.2 font-medium text-sm text-slate-900"}>Follow</Button>
        </div>

    </div>
  )
}

export default UserProfile