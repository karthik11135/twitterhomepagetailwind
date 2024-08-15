import React from 'react'
import ActualProfileDetails from './ActualProfileDetails'
import ActualProfileTweet from './ActualProfileTweet'
import ActualProfileReactions from './ActualProfileReactions'
const ActualPostContents = () => {
  return (
    <div className=''>
       <ActualProfileDetails />
        <ActualProfileTweet />
        <ActualProfileReactions />
    </div>
  )
}

export default ActualPostContents