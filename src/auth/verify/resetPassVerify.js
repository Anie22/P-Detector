import axios from "axios";
import { useEffect } from "react";

export const ResetVerification = () => {
    const encodedCode = new URLSearchParams(window.location.search)

    const code = encodedCode.get('encodedCode');

    const endCode = `"${code}"`

    useEffect(() => {
        const verifyRoute = async () => {
            try {
                const res = await axios.post('https://pedxo-backend.onrender.com/auth/verify-reset-password-otp', endCode)
                if(res){
                    window.location.href = 'https://pedxo.netlify.app/reset-password/update'
                }
            } catch(err) {
                if(err) {
                    window.location.href = 'https://pedxo.netlify.app/reset-password/verify'
                }
            }

        };

        verifyRoute();
    }, [endCode]);
}