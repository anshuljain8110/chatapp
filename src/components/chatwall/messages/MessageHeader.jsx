import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../context/Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function MessageHeader(props) {
  const { id, setUserImage } = props;
  const firebase = useFirebase();
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDocRef = doc(firebase.db, "users", id);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          setHeaderData({ id: userDocSnapshot.id, ...userDocSnapshot.data() });
          setUserImage(headerData.img);
        } else {
          setHeaderData(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setHeaderData(null);
      }
    };

    fetchUser();
  }, [firebase.db, id, headerData.img, setUserImage]);
  console.log(headerData);
  return (
    <div
      className={`bg-gray-200 flex items-center px-8 py-4 ${
        firebase.theme ? "dark:bg-gray-900 dark:border-gray-600" : ""
      }`}
      style={{ justifyContent: "space-between" }}
    >
      <div className="flex gap-2 items-center">
        <img
          className="rounded-full h-12 border border-gray-100 shadow-sm"
          src={headerData.img}
          alt="dfr"
        />
        <h2 className={`text-3xl font-semibold ${firebase.theme?"text-blue-500":""}`}>{headerData.name}</h2>
      </div>
      <Link className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" to="/chatwall/">Close</Link>
    </div>
  );
}
