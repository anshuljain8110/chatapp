import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageHeader from './MessageHeader'
import MainChatDisplay from './MainChatDisplay'
import CreateNewMessage from './CreateNewMessage'

export default function MessagesLayout() {
    const {id} = useParams()
    const [userImage,setUserImage] = useState("")
  return (
    <div className='flex flex-col h-screen'>
      <MessageHeader id={id} setUserImage={setUserImage}/>
      <MainChatDisplay id={id} userImage={userImage}/>
      <CreateNewMessage id = {id}/>
    </div>
  )
}
