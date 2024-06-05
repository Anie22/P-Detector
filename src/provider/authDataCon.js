import React, { createContext, useState } from "react";

const AuthInfo = createContext({});

export const AuthProvider = ({ children }) => {

    const [response, setResponse] = useState({});

    return (
        <AuthInfo.Provider value={{response, setResponse}}>
            {children}
        </AuthInfo.Provider>
    )
}

export default AuthInfo;