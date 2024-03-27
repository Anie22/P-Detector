import '../authCss/login.css';
import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../Img/pedxo_2.png';
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [icons, setIcons] = useState(null);
    const [mobileIcons, setMobileIcons] = useState(null);
    const [login, setLogin] = useState(null);
    const [error, setError] = useState({})

    const togglePass = () => {
        setShowPassword(!showPassword);
    };

    const handleInput = (e) => {
        const {name, value} = e.target

        setError({ ...error, [name]: undefined});
        setEmail(name === 'email' ? value: email);
        setPassword(name === 'password' ? value: password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErr = {};

        if(!email) {
            newErr.email = <p>Email required</p>
        } else if(!password) {
            newErr.password = <p>Password required</p>
        } else {
            const userLogins = {
                email,
                password
            };

            try {
                const res = await axios.post('https://pedxo-backend.onrender.com/auth/login', userLogins);
                if(res) {
                    const token = res.data
                    localStorage.setItem('currentSes', token)
                    window.location.href = '/dec'
                }
                
            } catch(err) {
                if(err.response){
                    const {status} = err.response
                    if(status === 404){
                        newErr.email = <p>Invalid email address</p>
                    } else {
                        newErr.password = <p>Wrong password</p>
                    }
                    
                }
                console.log(err)
            }

            console.log('res, token')
        }

        if (Object.keys(newErr).length > 0) {
            setError(newErr);
            return;
        }

    }

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
                            <form method='post' autoComplete='off' onSubmit={handleSubmit}>
                                <div className='user-input-holder'>
                                    <div className='email'>
                                        <label>Email</label>
                                        <input name='email' value={email} onChange={(e) => handleInput(e)} type='email' placeholder='email'></input>
                                        {error.email}
                                    </div>
                                    <div className='pass'>
                                        <label>Password</label>
                                        <input name='password' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => handleInput(e)} placeholder={showPassword ? 'Enter your password' : '********'}></input>
                                        <div className='togglebtn'>
                                            <button type='button' onClick={togglePass}>{showPassword ? <FaEye /> : <FaEyeSlash /> }</button>
                                        </div>
                                        {error.password}
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