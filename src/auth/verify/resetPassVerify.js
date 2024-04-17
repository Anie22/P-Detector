import axios from "axios";
import { useEffect } from "react";

export const ResetVerification = () => {

    const endCode = new URLSearchParams(window.location.search);

    const value = endCode.get('code');

    const code = value;

    useEffect(() => {

        const body = document.getElementById('body');

        body.style.height = '100vh';
        body.style.background = 'var(--innerblack)';
        body.style.color = 'var(--backgroundSecondary)';

        const data = {
            code
        };

        const verifyRoute = async () => {
            try {
                const url = 'https://pedxo-backend.onrender.com/auth/verify-reset-password-otp';

                const res = await axios.post(url, data);

                if(res){
                    window.location.href = '/reset-password/update';
                    body.innerHTML = 'verified'
                } else {
                    body.innerHTML = 'retry'
                }
                
            } catch(err) {

                if(err) {
                    body.innerHTML = 'Unable connect';

                    if(err.response) {
                        const {status} = err.response;

                        if(err.response.data.message === 'Your code has either expire or is Invalid' || status === 401) {
                            body.innerHTML = 'Link has expired'
                        }
                    }

                    const routeTime = setTimeout(() => {
                        window.location.href = '/reset-password/verify';
                    }, 2200 );

                    return () => clearTimeout(routeTime);
                } 
            }

        };

        verifyRoute();
    }, [code]);

    return (
        <div id="body" className="py-5 h3 w-100 text-capitalize text-center overflow-hidden"></div>
    )
}