import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/Firebase";
import MessageDropdown from "./MessageDropdown";
// import useSound from "use-sound"
// import boopSfx from "../../../sounds/notification.mp3";

export default function MainChatDisplay(props) {
  const firebase = useFirebase();
  const [chats, setChats] = useState([]);
  const [dropDownId, setDropDownId] = useState("");
  const { id, userImage } = props;
  // const [play] = useSound(boopSfx);

  // const updateConversationStatus = async () => {
  //   const conversationUpdateRef = doc(firebase.db, "conversations", `${id}-${firebase.userData.uid}`);
  //   await updateDoc(conversationUpdateRef, { status: "opened" });
  // };

  useEffect(() => {
    const fetchChats = () => {
      let arr = [id, firebase.userData.uid];
      arr.sort();
      const q = query(
        collection(firebase.db, "messages"),
        where("conversationId", "==", String(arr[0]) + String(arr[1])),
        orderBy("timestamp", "asc") // Order chats by timestamp in descending order
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newChats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChats(newChats);
        // play()
        // updateConversationStatus()
      });

      return unsubscribe;
    };

    fetchChats();
  }, [firebase.db, id, firebase.userData.uid]);
  console.log(chats);
  return (
    <div
      className={`h-full overflow-auto border- ${
        firebase.theme ? " border-blue-500 bg-gray-900 " : " border-white "
      }`}
    >
      {chats.map((e) => {
        return (
          <div
            className={`flex items-end justify-start ${
              firebase.userData.uid === e.senderId ? "flex-row-reverse	" : ""
            } px-2 m-1 gap-2 relative`}
          >
            <img
              src={
                e.senderId === firebase.userData.uid
                  ? firebase.userData.photoURL
                  : userImage
              }
              className="h-9 rounded-full"
              alt="dd"
            />
            {e.messageType === "text" ? (
              <div className="flex">
                <p
                  className={` p-2 text-white rounded-2xl hovereffect1 ${
                    firebase.userData.uid === e.senderId
                      ? "rounded-br-sm bg-blue-800"
                      : "rounded-bl-sm bg-gray-700"
                  }`}
                >
                  {e.content}
                </p>
                  {firebase.userData.uid === e.senderId?<button
                    onClick={() => {
                      setDropDownId(e.id);
                    }}
                    className="absolute right-0 opacity-0 hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 ml-2"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill={firebase.theme?"#ffffff":"#000000"}
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                      />
                    </svg>
                  </button>:""}
                {dropDownId === e.id && (
                  <MessageDropdown
                    setDropDownId={setDropDownId}
                    dropDownId={dropDownId}
                    type={"text"}
                  />
                )}
              </div>
            ) : (
              <div className="flex">
                <img
                  src={e.content}
                  alt=""
                  className={`rounded-3xl h-60 ${
                    firebase.theme ? "border-blue-500" : "border-white"
                  } border-4 border-solid ${
                    firebase.userData.uid === e.senderId
                      ? "rounded-br-sm"
                      : "rounded-bl-sm"
                  }`}
                />
                {firebase.userData.uid === e.senderId?<button
                  onClick={() => {
                    setDropDownId(e.id);
                  }}
                  className=" opacity-0 hover:opacity-100 absolute right-0 top-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 ml-2"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill={firebase.theme?"#ffffff":"#000000"}
                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                    />
                  </svg>
                </button>:""}
                {dropDownId === e.id && (
                  <MessageDropdown
                    setDropDownId={setDropDownId}
                    dropDownId={dropDownId}
                    type={e.content}
                  />
                )}
              </div>
            )}
            {e.timestamp && (
              <p
                className={`hovereffect2 ${firebase.theme ? "text-white" : ""}`}
              >
                {String(e.timestamp.toDate().getHours())}:
                {e.timestamp.toDate().getMinutes()}(
                {e.timestamp.toDate().getDate()}/
                {e.timestamp.toDate().getMonth() + 1}/
                {e.timestamp.toDate().getYear() - 100})
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
