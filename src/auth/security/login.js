import '../authCss/login.css';
import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../Img/pedxo_2.png';
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [icons, setIcons] = useState(null);
    const [mobileIcons, setMobileIcons] = useState(null);
    const [login, setLogin] = useState(null);

    const togglePass = () => {
        setShowPassword(!showPassword);
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

        const loginText = () => {
            if(window.innerWidth < 900) {
                setLogin(
                    <div className='heading d-flex w-100 justify-content-center h-5'>
                        <div className='logo'>
                            <h2>Login</h2>
                        </div>
                    </div>
                )
            } else {
                setLogin(null)
            }
        };

        loginText()

        window.addEventListener('resize', desktopIcons);
        window.addEventListener('resize', loginText);

        return () => {
            window.removeEventListener('resize', desktopIcons);
            window.removeEventListener('resize', loginText);
        };

    }, []);

    return (
        <div className="Login">
            <div>
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
                            {login}
                            <form>
                                <div className='user-input-holder'>
                                    <div className='email'>
                                        <label>Email</label>
                                        <input name='email' type='email' placeholder='email'></input>
                                    </div>
                                    <div className='pass'>
                                        <label>Password</label>
                                        <input name='password' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={showPassword ? 'Enter your password' : '********'}></input>
                                        <div className='togglebtn'>
                                            <button type='button' onClick={togglePass}>{showPassword ? <FaEye /> : <FaEyeSlash /> }</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-hol'>
                                    <div className='frg-txt'>
                                        <Link to='reset-password'>Forgotten password</Link>
                                    </div>
                                    <div className='sign-text'>
                                        <p>Don't have an account yet?</p>
                                        <Link to='/register'>Register</Link>
                                    </div>
                                </div>
                                <div className='button'>
                                    <button type='submit'>Login</button>
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