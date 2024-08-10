import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import '../authCss/frgPass.css';
import { Link } from 'react-router-dom';
import { AutoYear} from '../../components/date';
// import  axios  from 'axios';

export const ResetPass = () => {
    const emailRef = useRef(null);
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});

    const handleEml = (e) => {
        const {name, value} = e.target

        setError({...error, [name]: undefined});
        setEmail(name === 'email' ? value: email);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = {};

        const emil = /[@]/;
        const symbol = /[!#$%^&*]/;
        const space = /\s/g;

        if(!email) {
            err.email = <p>Email required</p>

            if(emailRef.current){
                emailRef.current.focus()
            }

        } else if(!emil.test(email)){

            err.email = <p>Incorrect email must include @</p>

            if(emailRef.current){
                emailRef.current.focus()
            }

        } else if(symbol.test(email)) {

            err.email = <p>Wrong email format</p>

            if(emailRef.current){
                emailRef.current.focus()
            }

        } else if(space.test(email)) {

            err.email = <p>No space allowed</p>

            if(emailRef.current){
                emailRef.current.focus()
            }

        }
        
        if(email) {
            return
        };

        if (Object.keys(err).length > 0) {
            setError(err);
            return;
        }
    }

    useEffect(() => {

        document.title = 'P-Detector - Reset_Password'

    }, [])

    return (
        <div className='forget'>
            <div className='sub-forget-holder'>
                <div className="d-flex align-items-start justify-content-center frg-pass-hol">
                    <div className="d-inline-flex align-items-start bg-white col-12 sub-frg-pass-hol">
                        <div className="col-12 d-flex align-items-center justify-content-center flex-column gap-3 bg-dark in-frg-pass-hol">
                            <div className='d-flex align-items-start col-lg-6 col-12 p-3 rounded-2 in-sub-frg-pass-hol'>
                                <div className='d-flex flex-column align-items-center gap-4 frg-hol'>
                                    <div>
                                        <h2 className='m-0 fs-6 p-0 text-capitalize text-white'>P-detector</h2>
                                    </div>
                                    <div className='d-flex flex-column align-items-center align-self-stretch gap-3 frg-pass-hol-text'>
                                        <h2>Forgot password</h2>
                                        <p>Enter the email you used to create your account so we can send you instructions on how to reset your password.</p>
                                    </div>
                                    <div className='col-12 frg-pass-hol-form-hol'>
                                        <form className='d-flex flex-column align-items-center align-self-stretch gap-4 col-12 main-form' method='post' autoComplete='off' onSubmit={handleSubmit}>
                                            <div className='d-flex flex-column align-items-center align-self-stretch gap-2 col-12 email-hol'>
                                                <label>Email Address</label>
                                                <div className='position-relative col-12 in-ico'>
                                                    <input type='email' placeholder='Enter your email' name='email' value={email} onChange={(e) => handleEml(e)} ref={emailRef}></input>
                                                    <div className='fa-holder'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className='fa'>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8323 17.5C17.6732 17.5 19.1656 16.0076 19.1656 14.1667V6.68557C19.1659 6.67283 19.1659 6.66005 19.1656 6.64725V5.83333C19.1656 3.99238 17.6732 2.5 15.8323 2.5H4.16559C2.32464 2.5 0.832253 3.99238 0.832253 5.83333V6.64726C0.831957 6.66005 0.831958 6.67282 0.832253 6.68556V14.1667C0.832253 16.0076 2.32464 17.5 4.16559 17.5H15.8323ZM2.49892 14.1667C2.49892 15.0871 3.24511 15.8333 4.16559 15.8333H15.8323C16.7527 15.8333 17.4989 15.0871 17.4989 14.1667V7.89753L11.2369 10.4023C10.4422 10.7202 9.55565 10.7202 8.76095 10.4023L2.49892 7.89753V14.1667ZM10.6179 8.85488L17.4989 6.10247V5.83333C17.4989 4.91286 16.7527 4.16667 15.8323 4.16667H4.16559C3.24511 4.16667 2.49892 4.91286 2.49892 5.83333V6.10247L9.37993 8.85488C9.77729 9.01382 10.2206 9.01382 10.6179 8.85488Z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                {error.email}
                                            </div>
                                            <div className='d-flex flex-column-reverse text-center align-slef-stretch gap-4 col-12 frg-pass-hol-form-hol-btn'>
                                                <Link to={'/login'} className='d-flex flex-column align-items-center align-self-stretch justify-content-center shadow link-hol'>
                                                    <p>Cancel</p>
                                                </Link>
                                                <div className='d-flex flex-column align-items-center align-self-stretch justify-content-center button'>
                                                    <button type='submit'>Send Email</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <AutoYear />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}