import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useFirebase } from "../../../context/Firebase";

export default function MessageDropdown(props) {
  const {setDropDownId, dropDownId, type} = props
  const firebase = useFirebase()
  const deleteMessageById = async (messageId) => {
    try {
      const messageRef = doc(firebase.db, "messages", messageId);
      await deleteDoc(messageRef);
      console.log("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error.message);
    }
  };
  return (
    <div className="absolute right-0 text-white z-10 bg-blue-500 p-2 mt-2 rounded flex flex-col">
      <button onClick={()=>{setDropDownId("")}} className=""><svg xmlns="http://www.w3.org/2000/svg" className="h-4 hover:bg-red-500" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
      <div className="flex flex-col justify-center items-center">
        <button onClick={()=>{deleteMessageById(dropDownId)}} className="hover:bg-blue-600 p-2 rounded w-full">Delete</button>
        {type==="text"?<button className="hover:bg-blue-600 p-2 rounded w-full">Edit</button>:<a className="hover:bg-blue-600 p-2 rounded w-full" href={type} download="image.jpg">Download</a>}
        {type!=="text"?<a className="hover:bg-blue-600 p-2 rounded " href={type} target="_blank" rel="noreferrer">Open</a>:""}
      </div>
    </div>
  );
}
