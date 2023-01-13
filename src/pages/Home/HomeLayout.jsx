import React from 'react'
import { MessageBar } from './MessageBar'
import { CreatorOfMonth } from './CreatorOfMonth'

export const HomeLayout = () => {
  return (
    <div>
      <CreatorOfMonth />
      <MessageBar />
    </div>
  )
}
