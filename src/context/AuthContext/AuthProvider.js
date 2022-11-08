import React, { createContext, useEffect, useState } from 'react';
import app from './../../firebase/firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
// declaring auth
const auth = getAuth(app);
// creating the auth context and being exported
export const AuthContext = createContext()
// end of creating context
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    // google login
    const googleAuthLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // implement logout
    const logout = () => {
        setLoading(true)
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
    const authInfo = {loading, user, googleAuthLogin, logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;