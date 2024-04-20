import React, { useState } from 'react'
import { useFirebase } from '../../../context/Firebase'
import SearchedUsers from './SearchedUsers'

export default function StartNewChat() {
  const firebase = useFirebase()
  const [searchresults,setSearchResults] = useState([])
  const [searchField,setSearchField] = useState("")
  const handleSearch = () =>{
    if(searchField.length<2){
      return
    }
    firebase.findUser(searchField,setSearchResults)
  }
  return (
    <div>
        {/* <input className='w-full p-2 rounded' placeholder='Start New Chat...' type="text"/> */}
        <form className='flex gap-2'> 
        <input onChange={(e)=>{setSearchField(e.target.value); handleSearch()}} value={searchField} className='w-full p-2 rounded' placeholder='Start New Chat...' type="text"/>
        <button className='bg-white rounded w-10' onClick={(e)=>{e.preventDefault(); setSearchField("")}}>X</button>
        </form>
        {(searchField.length>2 && searchresults.length!==0) && <SearchedUsers users={searchresults}/>}
    </div>
  )
}
