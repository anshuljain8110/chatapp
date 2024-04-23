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
        <input onChange={(e)=>{setSearchField(e.target.value); handleSearch()}} value={searchField} class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${firebase.theme?"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":""}`} placeholder='Start New Chat...' type="text"/>
        <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>{e.preventDefault(); setSearchField("")}}>Cancel</button>
        </form>
        {(searchField.length>2 && searchresults.length!==0) && <SearchedUsers users={searchresults}/>}
    </div>
  )
}
