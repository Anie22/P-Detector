import axios from 'axios';
import React, { useEffect } from 'react';

export const EmailVerification = () => {

    const binCode = new URLSearchParams(window.location.search);
    
    const bitCode = binCode.get('code');

    const encodedCode = bitCode;

    useEffect(() => {
        const handleSubmit = async () => {
            const data = [
                encodedCode
            ]

            try{
                const url = 'https://pedxo-backend-p7se.onrender.com/auth/verify-email'

                const res = await axios.post(url, data);

                if(res){
                    window.location.href = '/login'
                    localStorage.setItem('res', res)
                }
            } catch (err){
                if(err){
                    window.location.href = '/'
                    localStorage.setItem('err', err)
                }
            }
        }

        handleSubmit();

    }, [encodedCode]);

    return (
        <div className='bg-dark'></div>
    )
} 