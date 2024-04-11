import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app"
import { getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBBwx5Z1RgTV4rkAqc5ZBMHdbrY_n8XW-g",
    authDomain: "chat-app-ab38f.firebaseapp.com",
    projectId: "chat-app-ab38f",
    storageBucket: "chat-app-ab38f.appspot.com",
    messagingSenderId: "472610318686",
    appId: "1:472610318686:web:4f2ea2413a943434b307cf"
}
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseAuth = getAuth(firebaseApp)
const firebaseContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
export const useFirebase = () => useContext(firebaseContext)





export const FirebaseProvider = (props) =>{
    const [theme,settheme] = useState(localStorage.getItem("chatapptheme")?localStorage.getItem("chatapptheme")==="true":localStorage.setItem("chatapptheme","true"))
    const [loggedIn,setLoggedIn] = useState(false)
    const [userData,setUserData] = useState({})
    
    const checkTheme = (classNameToCheck) =>{
        return theme==="true"?classNameToCheck:""
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData(user)
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);


    const signupUserWithEmailAndPassword = (email,password) =>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const signUpWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
    }
    return(
        <firebaseContext.Provider value={{signupUserWithEmailAndPassword,
        signUpWithGoogle,
        theme,
        settheme,
        checkTheme,
        loggedIn,
        setLoggedIn,
        auth,
        userData}}>
            {props.children}
        </firebaseContext.Provider>
    )
}