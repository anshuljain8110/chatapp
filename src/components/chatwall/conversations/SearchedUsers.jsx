import React from "react";
import { Link } from "react-router-dom";

export default function SearchedUsers({ users }) {
  console.log(users);
  return (
    <div className="flex flex-col border border-gray-600 rounded p-2 mt-2">
      
      {users.length!==0 && users.map((e) => {
        return (
          <Link className="p-2 flex items-center gap-4 text-xl" to={e.id}>
            <img
              src={e.img}
              className="rounded-full h-12 border border-gray-100 shadow-sm"
              alt="no"
            />
            {e.name}
          </Link>
        );
      })}
    </div>
  );
}
