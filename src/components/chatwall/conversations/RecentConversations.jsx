import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";

export default function RecentConversations() {
  const [conversations, setconversations] = useState([]);
  const firebase = useFirebase();
  useEffect(() => {
    const fetchData = async () => {
      const q1 = query(
        collection(firebase.db, "conversations"),
        where("sender", "==", firebase.userData.uid)
      );
      const unsubscribe = onSnapshot(q1, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setconversations(newData);
        return 1;
      });
      return () => unsubscribe();
    };
    fetchData();
  }, [firebase.db, firebase.userData.uid]);
  console.log(conversations)
  return (
    <div className="mt-2">
      Recent Conversations
      {conversations.map((e) => {
        return (
          <>
          <Link
            className={`flex items-center ${firebase.theme?" hover:bg-gray-800 ":" hover:bg-gray-400 "}  p-2 rounded-xl`}
            style={{ justifyContent: "space-between" }}
            to={e.reciver}
          >
            <div className="flex gap-3">
              <img
                src={e.reciverimg}
                className="rounded-full h-12 border border-gray-100 shadow-sm"
                alt="no"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">{e.name}</h2>
                <p className="text-sm	">{e.lastMessage.slice(0, 20)}...</p>
              </div>
            </div>
            {e.updatedAt!==null && (
              <p>
                {String(e.updatedAt.toDate().getHours())}:
                {e.updatedAt.toDate().getMinutes()}
              </p>
            )}
          </Link>
          <hr />
          </>
        );
      })}
    </div>
  );
}
