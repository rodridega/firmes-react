import React from 'react'
import { MessageBar } from './MessageBar'
import { CreatorOfMonth } from './CreatorOfMonth'
import { ImagesHomeWrapper } from './ImagesHomeWrapper'

export const HomeLayout = () => {
  return (
    <div className='w-5/6'>
      {/*  <CreatorOfMonth /> */}
      {/*  <MessageBar /> */}
      <ImagesHomeWrapper />
    </div>
  )
}
