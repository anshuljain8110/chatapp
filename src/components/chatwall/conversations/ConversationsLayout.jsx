import React from 'react'
import StartNewChat from './StartNewChat'
import RecentConversations from './RecentConversations'

export default function Conversations() {
  return (
    <div className='p-5'>
      <StartNewChat/>
      <RecentConversations/>
    </div>
  )
}
