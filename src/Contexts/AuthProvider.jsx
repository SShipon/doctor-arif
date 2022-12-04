import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification,  sendPasswordResetEmail,  signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [reset, setReset] = useState(null)

 const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

 
 const signIn =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
 }

 const googleLoginInProvider = (provider) =>{
    return signInWithPopup(auth, provider)
 }

 const githubSignUp = (provider)=>{
   return signInWithPopup(auth, provider)
 }


 const logOut  = () =>{
    return signOut(auth)
 }

 const handleReset =(email,setReset)=>{
  return  sendPasswordResetEmail(auth,email)

 }

 const verifyEmail = ()=>{
   sendEmailVerification(auth.currentUser)
     .then(()=>{
      alert('cheek your email please verify now')
     })
 }




 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      console.log('User observing')
      setUser(currentUser)
    })
    return ()=> unsubscribe()
 },[])

    const authInfo ={
         handleReset,
         createUser,
         signIn,
         user,
         logOut,
         verifyEmail,
         googleLoginInProvider,
         githubSignUp,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;