import React, { createContext, useState } from "react";

const AuthInfo = createContext({});

export const AuthProvider = ({ children }) => {

    const [data, setData] = useState({});

    return (
        <AuthInfo.Provider value={{ data, setData }}>
            {children}
        </AuthInfo.Provider>
    )
}

export default AuthInfo;