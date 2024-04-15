import React from "react";
import { useState, useEffect } from "react";
import '../authCss/codever.css'
import { Logo } from '../logo';
import { Loader } from "../../components/loader";
import axios from "axios";
import { Success } from "../../components/success";

export const VerifyCode = () => {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState(false);
    const [icon, setIcon] = useState(null);
    const [message, setMessage] = useState(null);

    const resendLink = async () => {
        const email = localStorage.getItem('mail').replace(/"|"/g, '');
        const type = 'Reset Password';

        try {
            const resetPasswordInfo = {
                email,
                type
            };

            setLoading(true);

            const url = 'https://pedxo-backend.onrender.com/auth/request-otp';
            const resp = await axios.post(url, resetPasswordInfo);

            if(resp){
                setMessages(true);

                setIcon(
                    <div className="success">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
                            <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                );

                setMessage('')
            };

        } catch (err) {
            if(err) {
                const {status} = err;
                setIcon(
                    <div className="error">
                        <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                );

                if(err.message === "Network Error"){
                    setMessage('Network error, check your network');
                } else if(status === 500){
                    setMessage('Unable to conect with the server');
                };
            };

        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        const getEmail = () => {
            const mail = localStorage.getItem('mail');
            const mailIndex = [7, 8, 9, 10, 11, 12]
            const email = mail.replace(/./g, (char, index) => mailIndex.includes(index) ? '*' : char);
            setEmail(email);
        };

        if(loading) {
            setLoading(true);
        };

        if(message === 'Network error, check your network' || message === 500 || message === 400 || message === 404) {
            setMessages(true);        
            
            const Message = setTimeout(() => {
                setMessages(false);
            }, 3900);
    
            return () => clearTimeout(Message);
        } else if(message === '') {
            setMessages(true);        
            
            const Message = setTimeout(() => {
                setMessages(false);
            }, 3900);

            return () => clearTimeout(Message);
        } else {
            setMessages(false);
        }

        getEmail();
    }, [email, loading, message]);

    return (
        <div className="vry-cd-hol">
            <div className="in-vry-cd-hol">
                <Logo />
                <div className="sub-vry-cd-hol">
                    <div className="sub-vry-cd-cmp-hol">
                        <div className="sub">
                            <div className="sub-vry-cd-cmp-hol-head">
                                <h4>Check your email</h4>
                                <h6>We have sent an email with password reset information to <span>{email}</span></h6>
                            </div>
                            <div className="sub-vry-cd-cmp-hol-frm-hol">
                                <div className="form">
                                    <div className="vry-frm-txt-but">
                                        <p>Didn’t receive the email? Check spam or promotion folder or social</p>
                                        <button className="btn" type="submit" onClick={() => resendLink()}>
                                            <p>resend email</p>
                                        </button>
                                    </div>
                                    <div className="form-btn w-100">
                                        <a href="/login" className="link">
                                            <button className="btn w-100" type="button">
                                                <p>Back to login</p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {loading && <Loader />}
                {messages && <Success icon={icon} message={message} />}
            </div>
        </div>
    )
}