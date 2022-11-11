import React, { createContext, useEffect, useState } from 'react';
import app from './../../firebase/firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
// declaring auth
const auth = getAuth(app);
// creating the auth context and being exported
export const AuthContext = createContext()
// end of creating context
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    // create email password account
    const createEmailAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile value
    const updateHandler = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    // email login
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    // google login
    const googleAuthLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // implement logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem("photoGrapher-token")
        return signOut(auth)
    }
    // get currently log in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {loading, user, createEmailAccount, updateHandler, emailLogin, googleAuthLogin, logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;