import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useFirebase } from "../../../context/Firebase";

export default function CreateNewMessage(props) {
  const {id} = props
  const [message, setMessage] = useState("");
  const firebase = useFirebase()
  const createNewMessage = async() =>{
    if(message.length===0){
      return 0;
    }
    try {
      const messagesRef = collection(firebase.db, 'messages');
      let arr = [firebase.userData.uid,id]
      arr.sort()
    await addDoc(messagesRef, {
      conversationId: String(arr[0])+String(arr[1]),
      senderId: firebase.userData.uid,
      recipientId: id,
      content: message,
      messageType: "text",
      timestamp: serverTimestamp()
    });
    console.log("message creates")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="bg-gray-200 p-4 flex">
      <input
        type="text"
        value={message}
        className="w-full px-8 py-4 rounded-full"
        placeholder="Message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
      className="bg-gray-500 p-4 rounded-full ml-4"
      onClick={()=>{createNewMessage()}}
      >Sen</button>
    </div>
  );
}
