import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import '../authCss/email.css';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import { AutoYear} from '../../components/date';
import axios from '../../api/axios';

const VERIFY_ACCOUNT_URL = '/auth/verify/'
const RESEND_CODE_URL = '/auth/resend_code/'

export const EmailMsg = () => {
    const codRef = useRef(null);
    const codeRef1 = useRef(null);
    const codeRef2 = useRef(null);
    const codeRef3 = useRef(null);
    const codeRef4 = useRef(null);
    const buttonRef = useRef(null);
    const [cod, setCod] = useState('');
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [email, setEmail] = useState('')
    const [showloder, setShowloder] = useState(false)
    const [error, setError] = useState({});
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(false);
    const [icon, setIcon] = useState(null);
    const [timeState, setTimeState] = useState(false);
    const [time, setTime] = useState(60)

    const maxLength = 1

    const handleCode = (e) => {
        const {name, value} = e.target

        setError({...error, [name]: undefined});
        setCod(name === 'cod' ? value: cod);
        setCode1(name === 'code1' ? value: code1);
        setCode2(name === 'code2' ? value: code2);
        setCode3(name === 'code3' ? value: code3);
        setCode4(name === 'code4' ? value: code4);
    };

    const resendCode = async () => {
        const resBtn = document.getElementById('resnd')
        const email = localStorage.getItem('usermail').replace(/"|"/g, '')
        const verification_type = 'Email Verification'

        try {

            const resendingInfo = {
                email,
                verification_type
            };

            setShowloder(true)

            const res = await axios.post(RESEND_CODE_URL, resendingInfo);

            if(res) {
                setIcon(
                    <div className="success">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
                            <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                );

                setMessage('Email sent');

                const enableTime = setInterval(() => {
                    setTime(prev => {
                        if(prev > 1){
                            setTimeState(true);
                            resBtn.disabled = true;
                            return prev - 1
                        } else {
                            setTimeState(false);
                            resBtn.disabled = false;
                            clearInterval(enableTime)
                            return 0
                        }
                    });
                }, 2300);

                return () => clearInterval(enableTime);
            }
        } catch (err) {

            if(err) {

                setIcon(
                    <div className="error">
                        <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                );

                if(err.response) {
                    const {status} = err.response;
                    if(status === 500){
                        setMessage("Couldn't connect, timeout");
                    };
                }

                if(err.message === "Network Error") {
                    setMessage('Network error');
                }
            };

            console.error(err)

        } finally {
            setShowloder(false)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = {};

        if(!cod) {
            if(codRef.current){
                codRef.current.focus()
            }

        } else {
            const email = localStorage.getItem('usermail').replace(/"|"/g, '');
            const code = cod + code1 + code2 + code3 + code4;

            try {
                const data = {
                    email,
                    code
                };

                setShowloder(true)

                const res = await axios.post(VERIFY_ACCOUNT_URL, data);

                console.log(data)

                if(res) {
                    setIcon(
                        <div className="success">
                            <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
                                <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    );

                    
                    localStorage.removeItem('usermail');
                    setMessage('Signup successful');
                }

            } catch (error) {
                if(error) {
                    setIcon(
                        <div className="error">
                            <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    );

                    if(error.response){
                        const {status} = error.response;
                        if(status === 500 && error.response.data.message === 'Internal server error'){
                            setMessage("Couldn't connect, timeout");
                        } else if(error.response.data.non_field_errors[0] === "Invalid code or already use"){
                            err.cod = <p className='text-left'>{error.response.data.non_field_errors[0]}</p>
                        }
                    };
    

                    if(error.message === "Network Error"){
                        setMessage('Network error');
                    }
                }

                console.error(error)

            } finally {
                setShowloder(false)
            }
        };

        if (Object.keys(err).length > 0) {
            setError(err);
            return;
        }
    }

    useEffect(() => {
        if(message === 'Signup successful') {
            setMessages(true);        
            
            const Message = setTimeout(() => {
                setMessages(false);
                window.location.href = '/login'
            }, 2200);
    
            return () => clearTimeout(Message);
        }

        if(message === 'Email sent' || message === 'Network error' || message === "Couldn't connect, timeout") {
            setMessages(true);        
            
            const Message = setTimeout(() => {
                setMessages(false);
            }, 2200);
    
            return () => clearTimeout(Message);
        }

        document.title = 'Pedxo - Verrify_account'

    }, [message])

    useEffect(() => {
        function checkLength () {
            let num = cod
            let num1 = code1
            let num2 = code2
            let num3 = code3
            let num4 = code4

            if(cod.length > maxLength){
                setCod(num.slice(0, maxLength))
            } else if(cod.length === 1){
                if(codRef.current){
                    codeRef1.current.focus()
                }
            }

            if(code1.length > maxLength){
                setCode1(num1.slice(0, maxLength))
            } else if(code1.length === 1){
                if(codeRef1.current){
                    codeRef2.current.focus()
                }
            }

            if(code2.length > maxLength){
                setCode2(num2.slice(0, maxLength))
            } else if(code2.length === 1){
                if(codeRef2.current){
                    codeRef3.current.focus()
                }
            }

            if(code3.length > maxLength){
                setCode3(num3.slice(0, maxLength))
            } else if(code3.length === 1){
                if(codeRef3.current){
                    codeRef4.current.focus()
                }
            }

            if(code4.length > maxLength){
                setCode4(num4.slice(0, maxLength))
            } else if(code4.length === 1){
                return
            }
        }

        checkLength()

        return;
    }, [cod, code1, code2, code3, code4])

    useEffect(() => {
        const getEmail = () => {
            const mail = localStorage.getItem('usermail');
            const mailData = [3, 4, 6, 7, 8, 9, 10, 11, 12]
            const email = mail.replace(/,/g, (letters, i) => mailData.includes(i) ? '*' : letters)
            setEmail(email)
        }

        getEmail();

        const pageProtected = localStorage.getItem('usermail');

        if(!pageProtected){
            window.location.href = '/login'
        } else {
            return
        }

        return;
    }, [email])

    return (
        <div className='overflow-hidden emailVer bg-dark'>
            <div className='sub-emailVer-holder'>
                <div className="d-flex align-items-start justify-content-center emv-pass-hol">
                    <div className="d-inline-flex align-items-start col-12 sub-emv-pass-hol">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center gap-2 in-emv-pass-hol">
                            <div className='d-flex align-items-start gap-2 col-lg-6 col-12 rounded-2 shadow p-3 in-sub-emv-pass-hol'>
                                <div className='d-flex flex-column align-items-center gap-4 emv-hol'>
                                    <h2 className='m-0 fs-6 p-0 text-capitalize text-white'>P-detector</h2>
                                    <div className='d-flex flex-column align-items-center align-self-stretch gap-3 emv-pass-hol-text'>
                                        <h2 className='text-capitalize'>Verify your email address</h2>
                                        <p>Enter the 5 digit code that was sent to your email <span>{email}</span> to verify your account.</p>
                                    </div>
                                    <div className='d-flex flex-column align-items-center align-self-stretch gap-2 col-12 emv-pass-hol-form-hol'>
                                        <div className='d-flex flex-column align-items-center gap-2 col-12 bsd'>
                                            <div className='d-flex align-items-center justify-content-between col-12'>
                                                <p>DIdn't get a code</p>
                                                <button id='resnd' className='deb' onClick={() => resendCode()}>{timeState ? `Resend after ${time}s` : `Resend code`}</button>
                                            </div>
                                        </div>
                                        <form className='d-flex flex-column align-items-center align-self-stretch gap-4 col-12 main-form' method='post' autoComplete='off' onSubmit={handleSubmit}>
                                            <div className='d-flex flex-column align-items-center align-self-stretch gap-2 col-12 email-hol'>
                                                <div className='d-flex  align-items-center justify-content-center gap-2 gap-lg-4 gap-sm-3 position-relative col-12 in-ico'>
                                                    <input type='number' name='cod' value={cod} onChange={(e) => handleCode(e)} ref={codRef} maxLength={maxLength} minLength={1}></input>
                                                    <input type='number' name='code1' value={code1} onChange={(e) => handleCode(e)} ref={codeRef1} maxLength={maxLength} minLength={1}></input>
                                                    <input type='number' name='code2' value={code2} onChange={(e) => handleCode(e)} ref={codeRef2} maxLength={maxLength} minLength={1}></input>
                                                    <input type='number' name='code3' value={code3} onChange={(e) => handleCode(e)} ref={codeRef3} maxLength={maxLength} minLength={1}></input>
                                                    <input type='number' name='code4' value={code4} onChange={(e) => handleCode(e)} ref={codeRef4} maxLength={maxLength} minLength={1}></input>
                                                </div>
                                                {error.cod}
                                            </div>
                                            <div className='d-flex flex-column-reverse text-center align-slef-stretch gap-4 col-12 emv-pass-hol-form-hol-btn'>
                                                <Link to='/login' className='d-flex flex-column align-items-center align-self-stretch justify-content-center link-hol'>
                                                    <p>Cancel</p>
                                                </Link>
                                                <div className='d-flex flex-column align-items-center align-self-stretch justify-content-center text-capitalize button'>
                                                    {showloder ? <Loader /> :  <button type='submit' ref={buttonRef}>Verify email address</button>}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <AutoYear />
                        </div>
                        {messages && <Modal message={message} icon={icon} />}
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}