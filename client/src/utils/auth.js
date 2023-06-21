import {auth} from '../Firebase'
import { createContext,useContext, useState,useEffect } from 'react'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    function Signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function Login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function LogOut(){
        return auth.signOut()
    }
}