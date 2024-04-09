import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import app from '../firebase.config';
export const Providers = createContext();
const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGoogle = () =>{
       return signInWithPopup(auth,googleProvider)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const signUpWithGithub = () => {
      return  signInWithPopup(auth , githubProvider)
    }
    const logOut = () => {
       return signOut(auth)
    }

    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        createUser,
        signUpWithGoogle,
        signUpWithGithub,
        logOut,
        signIn
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