import React from "react";
import { useEffect } from "react";
import '../authCss/codever.css'
// import { Loader } from "../../components/loader";
// import axios from "axios";
// import { Modal } from "../../components/modal";

export const VerifyCode = () => {
    // const [email, setEmail] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [messages, setMessages] = useState(false);
    // const [icon, setIcon] = useState(null);
    // const [message, setMessage] = useState(null);
    // const [disableMsg, setDisableMsg] = useState(false);
    // const [disableTime, setDisableTime] = useState(60);

    // const resendLink = async () => {
    //     const email = localStorage.getItem('mail').replace(/"|"/g, '');
    //     const type = 'Reset Password';
    //     const button = document.getElementById('butn');

    //     try {
    //         const resetPasswordInfo = {
    //             email,
    //             type
    //         };

    //         setLoading(true);

    //         const url = 'https://pedxo-backend-p7se.onrender.com/auth/request-otp';
    //         const resp = await axios.post(url, resetPasswordInfo);

    //         if(resp){
    //             setMessages(true);

    //             setIcon(
    //                 <div className="success">
    //                     <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
    //                         <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     </svg>
    //                 </div>
    //             );


    //             setMessage('');

    //             const disableCountTime = setInterval(() => {
    //                 setDisableTime(prevCount => {
    //                     if (prevCount > 1) {
    //                         setDisableMsg(true);
    //                         button.disabled = true;
    //                         return prevCount - 1;
    //                     } else {
    //                         button.disabled = false;
    //                         setDisableMsg(false);
    //                         clearInterval(disableCountTime); 
    //                         return 0;
    //                     }
    //                 });
    //             }, 2500);
                
    //             return () => clearInterval(disableCountTime);
    //         };

    //     } catch (err) {
    //         if(err) {

    //             setIcon(
    //                 <div className="error">
    //                     <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"></path>
    //                     </svg>
    //                 </div>
    //             );

    //             if(err.response) {
    //                 const {status} = err.response;
    //                 if(status === 500){
    //                     setMessage("Couldn't connect, timeout");
    //                 };
    //             }

    //             if(err.message === "Network Error") {
    //                 setMessage('Network error, check your network');
    //             }
    //         };

    //     } finally {
    //         setLoading(false);
    //     };
    // };

    useEffect(() => {

        // if(message === '' || message === 'Network error, check your network' || message === "Couldn't connect, timeout") {
        //     setMessages(true);        
            
        //     const Mes = setTimeout(() => {
        //         setMessages(false);
        //     }, 3000);

        //     return () => clearTimeout(Mes);

        // }

        // const getEmail = () => {
        //     const mail = localStorage.getItem('mail');
        //     const mailIndex = [7, 8, 9, 10, 11, 12]
        //     const email = mail.replace(/./g, (char, index) => mailIndex.includes(index) ? '*' : char);
        //     setEmail(email);
        // };

        // getEmail();

        document.title = 'P-Detector - Resend_Password_Verification'

    }, []);

    return (
        <div className="overflow-hidden ver">
            <div className="sub-ver">
                <div className="d-inline-flex align-items-start justify-content-center col-12 vry-cd-hol">
                    <div className="d-flex justify-content-center bg-white col-12 in-vry-cd-hol">
                        <div className="d-flex flex-column align-items-center justify-content-between col-6 sub-vry-cd-hol">
                            <div className="d-flex align-items-start col-12 sub-vry-cd-cmp-hol">
                                <div className="d-flex flex-column align-items-start gap-4 sub">
                                    <div className="d-flex flex-column align-items-center align-self-stretch gap-3 col-12 sub-vry-cd-cmp-hol-head">
                                        <h4>Check your email</h4>
                                        {/* <h6>We have sent an email with password reset information to <br /> <span>{email}</span></h6> */}
                                    </div>
                                    <div className="col-12 sub-vry-cd-cmp-hol-frm-hol">
                                        <div className="d-flex flex-column align-items-center align-self-stretch gap-4 form">
                                            <div className="d-flex flex-column align-items-center align-self-stretch gap-3 vry-frm-txt-but">
                                                <p>Didn’t receive the email? Check spam or promotion folder or social</p>
                                                <button className="d-flex flex-column align-items-center align-self-stretch justify-content-center btn" id="butn" type="submit">
                                                    {/* { disableMsg ? <p>resend in <span className="text-lowercase">{disableTime}s</span></p> : <p>resend email</p> } */}
                                                </button>
                                            </div>
                                            <div className="col-12 form-btn">
                                                <a href="/login" className="link">
                                                    <button className="d-flex flex-column align-items-center align-self-stretch justify-content-center col-12 btn" type="button">
                                                        <p>Back to login</p>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}