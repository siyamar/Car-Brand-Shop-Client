import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
             setLoading(false)
         });
         return ()=>{
             unSubscribe();
         }
     },[])

    const userInfo={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;