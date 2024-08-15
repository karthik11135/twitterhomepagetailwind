import React from 'react'
import ProfilePic from './ProfilePic'
import ActualPostContents from './ActualPostContents'

const ActualPost = () => {
  return (
    <div className='grid grid-cols-9 border-b border-xborder'>
        <div className='col-span-1 px-3'>
            <ProfilePic />
        </div>
        <div className='col-start-2 col-span-8'>
            <ActualPostContents />
        </div>
    </div>
  )
}

export default ActualPost