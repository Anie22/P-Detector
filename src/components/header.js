import React, { useEffect } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import './css/header.css';

export const Header = () => {
    const [openServices, setOpenService] = useState(false);
    const [scroll, setScroll] = useState(false)

    const toggleServices = () => {
        setOpenService(!openServices)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 0){
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="position-fixed header--holder">
            <div className="inner-header">
                <header className={scroll ? "main-header header--scroll" : 'main-header'}>
                    <div className="header-content">
                        <div className="logo">
                            <h4>
                                <a href="/">Pedxo</a>
                            </h4>
                        </div>
                        <nav className="nav-holder">
                            <ul className="nav nav-content">
                                <div className="nav-first-content nav">
                                    <li className="nav-content-link">
                                        <a href="/#about">About</a>
                                    </li>
                                    <div className="nav-sub-content-link">
                                        <li className="first-link">
                                            <a href="/#services">Services</a>
                                            <FaChevronDown className="fa" onClick={toggleServices} />
                                        </li>
                                        <div className={openServices ? "dropdown" : "dropdown hide"}>
                                            <li className="dropdown-link">
                                                <a href="/">Hire Talent</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/">Let's Build</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/">Find Job</a>
                                            </li>
                                        </div>
                                    </div>
                                    <li className="nav-content-link">
                                        <a href="/#faq">FAQ's</a>
                                    </li>
                                    <li className="nav-content-link">
                                        <a href="mailto:support@pedxo.com">Contact Us</a>
                                    </li>
                                </div>
                                <div className="nav-second-content">
                                    <div className="second-con-link">
                                        <li className="login-link">
                                            <a href="/login">Login</a>
                                        </li>
                                    </div>
                                    <div className="button-link">
                                        <li className="book">
                                            <a href="/book-demo">Book demo</a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}