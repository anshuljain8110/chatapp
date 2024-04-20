import React from "react";
import { useFirebase } from "../../context/Firebase";
import { Navigate, Outlet } from "react-router-dom";
import ConversationsLayout from "./conversations/ConversationsLayout";

export default function Chatwall() {
  const firebase = useFirebase();
  console.log(firebase);
  return (
    <div className="grid grid-cols-4 h-screen">
      {/* protected the chatwall route */}
      {!firebase.loggedIn && <Navigate to="/signin" />}
      <div className="bg-gray-200 col-span-1">
        {firebase.loggedIn && <ConversationsLayout />}
      </div>
      <div className="bg-gray-300 col-span-3">
       {firebase.loggedIn && <Outlet />}
      </div>
    </div>
  );
}
