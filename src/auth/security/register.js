import '../authCss/register.css';
import React, { useState, useEffect } from 'react';
import logo from '../../Img/pedxo_2.png';
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const SignUp = () => {
    const [icons, setIcons] = useState(null);
    const [mobileIcons, setMobileIcons] = useState(null);
    const [signText, setSignText] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const togglePass = () => {
        setShowPassword(!showPassword);
    };

    const toggleComPass = () => {
        setShowConfirmPass(!showConfirmPass);
    };

    useEffect(() => {
        const desktopIcons = () => {
            if (window.innerWidth > 900) {
                setIcons (
                    <div className='media-han'>
                        <a className='icon' href='https://twitter.com/Pedxodotcom'><FaTwitter /></a>
                        <a className='icon' href='https://web.facebook.com/people/Pedxo/100090410366859'><FaFacebookF /></a>
                        <a className='icon' href='https://www.linkedin.com/company/pedxo'><FaLinkedinIn /></a>
                    </div>
                );
            } else {
                setIcons(null)
            }

            if(window.innerWidth < 900) {
                setMobileIcons (
                    <div className='media-han py-1'>
                        <a className='icon' href='https://twitter.com/Pedxodotcom'><FaTwitter /></a>
                        <a className='icon' href='https://web.facebook.com/people/Pedxo/100090410366859'><FaFacebookF /></a>
                        <a className='icon' href='https://www.linkedin.com/company/pedxo'><FaLinkedinIn /></a>
                    </div>
                )
            } else {
                setMobileIcons(null)
            }
        };

        desktopIcons()

        const signupText = () => {
            if(window.innerWidth < 900) {
                setSignText(
                    <div className='heading d-flex w-100 justify-content-center h-5'>
                        <div className='logo'>
                            <h2 className=''>Sign Up</h2>
                        </div>
                    </div>
                )
            } else {
                setSignText(null)
            }
        };

        signupText()

        window.addEventListener('resize', desktopIcons);
        window.addEventListener('resize', signupText);

        return () => {
            window.removeEventListener('resize', desktopIcons);
            window.removeEventListener('resize', signupText);
        };

    }, []);

    return (
        <div className="signup">
            <div className='signup-inner-app'>
                <div className='inner-app'>
                    <div className='sub-app'>
                        <div className='Logo-media-holder'>
                            <div className='logo d-flex justify-content-center'>
                                <div className='inner-logo'>
                                    <img className='img-fluid' src={logo} alt=''></img>
                                </div>
                            </div>
                            {icons}
                        </div>
                        <div className='form-holder'>
                            {signText}
                            <form method='' action=''>
                                <div className='user-input-holder'>
                                    <div className='name-holder d-flex items-center w-100 gap-5'>
                                        <div className='fname'>
                                            <label>First name</label>
                                            <input name='text' type='text' placeholder='first name' value={firstName}></input>
                                        </div>
                                        <div className='lname'>
                                            <label>Last name</label>
                                            <input name='text' type='text' placeholder='last name' value={lastName}></input>
                                        </div>
                                    </div>
                                    <div className='unme-eml-hol d-flex items-center w-100 gap-5'>
                                        <div className='uname'>
                                            <label>User name</label>
                                            <input name='text' type='text' placeholder='user name' value={userName}></input>
                                        </div>
                                        <div className='email'>
                                            <label>Email</label>
                                            <input name='email' type='email' placeholder='email' value={email}></input>
                                        </div>
                                    </div>
                                    <div className='pass-hol d-flex items-center w-100 gap-5'>
                                        <div className='pass'>
                                            <label>Password</label>
                                            <input name='pass' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={showPassword ? 'Enter your password' : '********'}></input>
                                            <div className='togglebtn'>
                                                <button type='button' onClick={togglePass}>{showPassword ? <FaEye /> : <FaEyeSlash /> }</button>
                                            </div>
                                        </div>
                                        <div className='pass'>
                                            <label>Confirm Password</label>
                                            <input name='pass' type={showConfirmPass ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={showConfirmPass ? 'Enter your password' : '********'}></input>
                                            <div className='togglebtn'>
                                                <button type='button' onClick={toggleComPass}>{showConfirmPass ? <FaEye /> : <FaEyeSlash /> }</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-hol'>
                                    <div className='sign-text'>
                                        <p>Already have an account?</p>
                                        <Link to='/'>Login</Link>
                                    </div>
                                </div>
                                <div className='button'>
                                    <button type='submit'>Create account</button>
                                </div>
                            </form>
                        </div>
                        {mobileIcons}
                    </div>
                </div>
            </div>
        </div>
    )
}