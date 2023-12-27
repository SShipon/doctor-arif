import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification,  sendPasswordResetEmail,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
//const [resetPassword, setReset] = useState(null);

 const createUser = (email, password)=>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const signIn =(email, password)=>{
   setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
 }

 const googleLoginInProvider = (provider) =>{
   setLoading(true)
    return signInWithPopup(auth, provider)
 }

 const githubSignUp = (provider)=>{
   setLoading(true)
   return signInWithPopup(auth, provider)
 }

 const logOut  = () =>{
   setLoading(true)
    return signOut(auth)
 }

 const verifyEmail = ()=>{
   sendEmailVerification(auth.currentUser)
     .then(()=>{
     toast.success(" Please cheek your email !!!", {
            position: toast.POSITION.TOP_RIGHT,
          });
     })
 }

 const updateUser =(userInfo)=>{
   return updateProfile(user, userInfo)
 }

 const sendResetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};





 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      console.log('User observing')
      setUser(currentUser)
      setLoading(false)
    })
    return ()=> unsubscribe()
 },[])

    const authInfo ={
         createUser,
         signIn,
         user,
         loading,
         setLoading,
         updateUser,
         logOut,
         verifyEmail,
         googleLoginInProvider,
         githubSignUp,
         sendResetPassword
       

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;