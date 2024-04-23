import React from 'react'
import StartNewChat from './StartNewChat'
import RecentConversations from './RecentConversations'
import { useFirebase } from '../../../context/Firebase'

export default function Conversations() {
  const firebase = useFirebase()
  return (
    <div className={`p-5 h-full border-2 ${firebase.theme?"bg-gray-900 border-blue-500 text-white":"border-white"}`}>
      <StartNewChat/>
      <RecentConversations/>
    </div>
  )
}
