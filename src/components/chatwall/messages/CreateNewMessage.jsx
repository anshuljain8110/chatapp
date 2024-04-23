import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useFirebase } from "../../../context/Firebase";
import "font-awesome/css/font-awesome.min.css";

export default function CreateNewMessage(props) {
  const { id } = props;
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [imageHEXCode, setImageHEXCode] = useState("");
  const firebase = useFirebase();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  const handleFileChange = (event) => {
    try {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageHEXCode(String(reader.result))
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.log(error.message);
    }
  };


  const createNewMessage = async (e, messageType = "text") => {
    e.preventDefault();
    console.log("first");
    if (message.length === 0 && imageHEXCode.length === 0) {
      return;
    }
  
    try {
      const conversationRef = doc(
        firebase.db,
        "conversations",
        `${firebase.userData.uid}-${id}`
      );
      const conversationSnapshot = await getDoc(conversationRef);
      
      if (!conversationSnapshot.exists()) {
        firebase.createConversation(firebase.userData.uid, id);
      }
  
      const messagesRef = collection(firebase.db, "messages");
      let arr = [firebase.userData.uid, id];
      arr.sort();
      await addDoc(messagesRef, {
        conversationId: `${arr[0]}${arr[1]}`,
        senderId: firebase.userData.uid,
        recipientId: id,
        content: messageType === "text" ? message : imageHEXCode,
        messageType: messageType,
        timestamp: serverTimestamp(),
      });
  
      // Update conversation status
      const conversationUpdateRef = doc(firebase.db, "conversations", `${id}-${firebase.userData.uid}`);
      await updateDoc(conversationUpdateRef, { lastMessage: message, status: "unopened", updatedAt: serverTimestamp() });
  
      setMessage("");
      setImageHEXCode("");
    } catch (error) {
      console.log("Error creating new message:", error.message);
    }
  };

  return (
    <>
      {imageHEXCode.length===0 ? (
        <form
          className={`bg-gray-200 p-4 flex border-2 ${
            firebase.theme ? "dark:bg-gray-900 dark:border-blue-500" : "border-white"
          }`}
          onSubmit={(e) => {
            createNewMessage(e);
          }}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            type="text"
            value={message}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              firebase.theme
                ? "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                : ""
            }`}
            placeholder="Message..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {message.length !== 0 ? (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 p-3 mt-1 ml-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-8"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          ) : (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 p-3 mt-1 ml-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleButtonClick}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8"
                viewBox="0 0 512 512"
              >
                <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
              </svg>
            </button>
          )}
        </form>
      ) : (
        <div className={`absolute bottom-0 text-white p-2 rounded m-4 border-2 ${firebase.theme?"border-blue-500 bg-gray-900":"border-gray-200 bg-gray-400"}`}>
          <form onSubmit={(e) => { createNewMessage(e, "image"); }}>
            <img src={imageHEXCode} alt="Uploaded" className="h-60 rounded" />
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => { setImageHEXCode(""); }}>Cancel</button>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
