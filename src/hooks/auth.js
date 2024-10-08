import { useContext, useDebugValue } from "react";
import AuthInfo from "../provider/authData";

export const useAuth = () => {
    const { data } = useContext(AuthInfo);
    useDebugValue(data, data => data?.roles ? "Logged In" : "Logged Out");
    return useContext(AuthInfo);
};