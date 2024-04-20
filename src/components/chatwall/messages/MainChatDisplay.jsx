import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../context/Firebase';

export default function MainChatDisplay(props) {
  const firebase = useFirebase()
  const [chats,setChats] = useState([])
  const {id,userImage} = props
  useEffect(() => {
    const fetchChats = () => {
      let arr = [id,firebase.userData.uid]
      arr.sort()
      const q = query(
        collection(firebase.db, 'messages'),
        where("conversationId","==",String(arr[0])+String(arr[1])),
        orderBy('timestamp', 'asc') // Order chats by timestamp in descending order
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newChats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setChats(newChats);
      });

      return unsubscribe;
    };

    fetchChats();
  }, [firebase.db,id,firebase.userData.uid]);
  console.log(chats)
  return (
    <div className='h-full overflow-auto'>
        {chats.map((e)=>{
          return <div className={`flex items-center ${firebase.userData.uid===e.senderId?"justify-end":"justify-start"} px-2 m-1 gap-2`}>
            {e.senderId!==firebase.userData.uid?<img src={userImage} className='h-9 rounded-full' alt="dd" />:""}
            <p className={`bg-blue-900 rounded p-2 text-white rounded-2xl ${firebase.userData.uid===e.senderId?"rounded-br-sm":"rounded-bl-sm"}`}>{e.content}</p>
          </div>
        })}
    </div>
  )
}
