import { updateProfile, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import app from '../firebase.config';
export const Providers = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        signUpWithGoogle,
        signUpWithGithub,
        logOut,
        signIn,
        loading
    }
    return (
        <>
            <Providers.Provider value={AuthInfo}>
                {children}
            </Providers.Provider>
        </>
    );
};

export default AuthProvider;