import React from 'react'

const ActualProfileReaction = ({icon, count}) => {
  return (
    <div className='flex gap-1 me-2 cursor-pointer'>
        <div>
            {icon}
        </div>
        <p className='text-searchplaceholder text-sm'>
            {count}
        </p>
    </div>
  )
}

export default ActualProfileReaction