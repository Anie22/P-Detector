import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


export const ResetVerification = () => {
    const [encodedCode] = useParams();

    useEffect(() => {
        const verifyRoute = async () => {
            try {
                const res = await axios.get(`https://pedxo-backend.onrender.com/auth/verify-reset-password-otp?${encodedCode}`);
                if(res) {
                    console.log(res)
                    localStorage.setItem('t', encodedCode)
                    window.location.href = 'https://pedxo.netlify.app/reset-password/update';
                }
            } catch(err) {
                console.log('err', err);
            }

        };

        verifyRoute();
    }, [encodedCode])

    return (
        <div></div>
    )
}