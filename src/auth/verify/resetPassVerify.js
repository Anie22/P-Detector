import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


export const ResetVerification = () => {
    const [encodedCode] = useParams();

    useEffect(() => {
        const verifyRoute = async () => {
            try {
                await axios.get(`https://pedxo.netlify.app/resetver/?${encodedCode}`);
            } catch(err) {
                console.log('err', err);
            }

            try {
                const res = await axios.post('https://pedxo-backend.onrender.com/auth/verify-reset-password-otp', encodedCode);

                if(res) {
                    console.log(res)
                    window.location.href = 'https://pedxo.netlify.app/reset-password/update';
                }
            } catch(err) {
                console.log(err)
            }

        };

        verifyRoute();
    }, [encodedCode]);

    return (
        <div></div>
    )
}