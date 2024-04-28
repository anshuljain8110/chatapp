import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/Firebase";
// import useSound from "use-sound"
// import boopSfx from "../../../sounds/notification.mp3";

export default function MainChatDisplay(props) {
  const firebase = useFirebase();
  const [chats, setChats] = useState([]);
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
              <p
                className={` p-2 text-white rounded-2xl hovereffect1 ${
                  firebase.userData.uid === e.senderId
                    ? "rounded-br-sm bg-blue-800"
                    : "rounded-bl-sm bg-gray-700"
                }`}
              >
                {e.content}
              </p>
            ) : (
              <img
                src={e.content}
                alt=""
                className={`rounded-3xl h-60 ${firebase.theme?"border-blue-500":"border-white"} border-4 border-solid ${
                  firebase.userData.uid === e.senderId
                    ? "rounded-br-sm"
                    : "rounded-bl-sm"
                }`}
              />
            )}
            {e.timestamp && (
              <p className={`hovereffect2 ${firebase.theme?"text-white":""}`}>
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
