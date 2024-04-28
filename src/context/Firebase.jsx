import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBwx5Z1RgTV4rkAqc5ZBMHdbrY_n8XW-g",
    authDomain: "chat-app-ab38f.firebaseapp.com",
    projectId: "chat-app-ab38f",
    storageBucket: "chat-app-ab38f.appspot.com",
    messagingSenderId: "472610318686",
    appId: "1:472610318686:web:4f2ea2413a943434b307cf",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseAuth = getAuth(firebaseApp);
const firebaseContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) => {
    const [theme, settheme] = useState(
        localStorage.getItem("chatapptheme")
            ? localStorage.getItem("chatapptheme") === "true"
            : localStorage.setItem("chatapptheme", "true")
    );
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const checkTheme = (classNameToCheck) => {
        return theme === "true" ? classNameToCheck : "";
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData(user);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const signupUserWithEmailAndPassword = async (email, password) => {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const userCollection = collection(db, "users")
        const docRef = doc(db, "users", userData.uid)
        const docSnap = await getDoc(docRef)
        if (!docSnap.exists()) {
            await setDoc(doc(userCollection, userData.uid), {
                name: userData.email,
                id: userData.uid
            })
        }
    };
    const signUpWithGoogle = async () => {
        try {
          // Sign in with Google authentication
          const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
          const user = userCredential.user;
      
          // Add user data to Firestore
          const userCollection = doc(db, "users", user.uid);
          await setDoc(userCollection, {
            name: user.displayName,
            id: user.uid,
            img: user.photoURL,
            email: user.email,
            userSince: user.metadata.creationTime,
            lastSeen: user.metadata.lastSignInTime
          });
      
          console.log("User signed up with Google successfully.");
        } catch (error) {
          console.error("Error signing up with Google:", error.message);
        }
      };


    const findUser = async (searchInput, setSearchResults) => {
        try {
            const usersCollection = collection(db, "users");
            const q = query(usersCollection, where("name", ">=", searchInput), where("name", "<=", searchInput + "\uf8ff"));
            const querySnapshot = await getDocs(q);
            const results = [];
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                results.push(userData);
            });
            setSearchResults(results);
        } catch (error) {
            console.error("Error searching for users:", error);
        }
    }

    const createConversation = async(id1,id2) =>{
        const conversationsCollection = collection(db, "conversations")

        const docRef1 = doc(db, "users", id1)
        const docRef2 = doc(db, "users", id2)
        const snapShot1 = await getDoc(docRef1)
        const snapShot2 = await getDoc(docRef2)
        // console.log(snapShot1.data())
        const user1 = snapShot1.data()
        const user2 = snapShot2.data()

        const document1 = {sender: user1.id,reciver: user2.id,reciverimg: user2.img,status: "unopened",name: user2.name,updatedAt:serverTimestamp(),lastMessage:"Nothing To Show Here"}
        const document2 = {sender: user2.id,reciver: user1.id,reciverimg: user1.img,status: "unopened",name: user1.name,updatedAt:serverTimestamp(),lastMessage:"Nothing To Show Here"}

        await setDoc(doc(conversationsCollection, String(user1.id)+"-"+String(user2.id)), document1)
        await setDoc(doc(conversationsCollection, String(user2.id)+"-"+String(user1.id)), document2)

        console.log("first")
    }


    return (
        <firebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                signUpWithGoogle,
                theme,
                settheme,
                checkTheme,
                loggedIn,
                setLoggedIn,
                auth,
                userData,
                findUser,
                createConversation,
                db,
            }}
        >
            {props.children}
        </firebaseContext.Provider>
    );
};
