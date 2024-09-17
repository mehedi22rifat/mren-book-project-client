import React, { Children, createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase.config';





 export const authContext = createContext(null)
 const auth = getAuth(app)

 const googleProvider = new GoogleAuthProvider()

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true);

  // singin with google
  const singInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

//  register user
  const registerUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // Login user 
  const LoginUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // logOut
  const logout = () =>{
     setLoading(true)
     return signOut(auth)
  }

  // un othrize
  useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      console.log('user is state change',currentUser )
      setUser(currentUser)
      setLoading(false)
     })
     return () =>{
      unSubscribe();
     }
     
  },[])


  const authInfo = {
       user,
       loading,
       logout,
       registerUser,
       LoginUser,
       singInWithGoogle
  }

  return (
   <authContext.Provider value={authInfo}>
      {children}
   </authContext.Provider>
  )
}
