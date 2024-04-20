import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../context/Firebase"
import { doc, getDoc } from 'firebase/firestore';

export default function MessageHeader(props) {
  const {id,setUserImage} = props
  const firebase = useFirebase()
  const [headerData,setHeaderData] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDocRef = doc(firebase.db, 'users', id);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          setHeaderData({ id: userDocSnapshot.id, ...userDocSnapshot.data() });
          setUserImage(headerData.img)
        } else {
          setHeaderData(null);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setHeaderData(null);
      }
    };

    fetchUser();
  }, [firebase.db, id,headerData.img,setUserImage]);
  console.log(headerData)
  return (
    <div className="bg-gray-200 flex items-center px-8 py-4" style={{justifyContent:"space-between"}}>
      <div className="flex gap-2 items-center">
        <img className="rounded-full h-12 border border-gray-100 shadow-sm" src={headerData.img} alt="dfr" />
        <h2 className="text-3xl font-semibold">{headerData.name}</h2>
      </div>
      <Link to="/chatwall/">X</Link>
    </div>
  );
}
