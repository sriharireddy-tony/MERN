import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
const accessToken = sessionStorage.getItem('accessToken');
    const [user, setUser] = useState(accessToken);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
        sessionStorage.clear();
    }

    return (<AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>);

};

export const useAuth = () => {
    return useContext(AuthContext)
}