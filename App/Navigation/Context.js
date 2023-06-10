import React, { createContext, useEffect, useState } from "react";
import firebase from '@react-native-firebase/app';
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false)
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (itemId) => {
        if (favorites.includes(itemId)) {
         
          setFavorites(favorites.filter((id) => id !== itemId));
        } else {
          setFavorites([...favorites, itemId]);
        }
      };
    const login = () => {
        setIsLogin(true)
    }
    const logout = () => {
        setIsLogin(null)

    }
    return (
        <AuthContext.Provider value={{ login, logout, isLogin,setIsLogin,favorites,toggleFavorite }}>
            {children}
        </AuthContext.Provider>
    )
}