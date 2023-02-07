import React from 'react'
import { MessageBar } from './MessageBar'
import { CreatorOfMonth } from './CreatorOfMonth'
import { ImagesHomeWrapper } from './ImagesHomeWrapper'

export const HomeLayout = () => {


  return (
    <div className='w-full py-16'>
      {/*  <CreatorOfMonth /> */}
      <ImagesHomeWrapper />
      <MessageBar />
    </div>
  )
}
