import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import './css/footer.css'

export const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        const automateCurrentYear = () => {
            const year = new Date()
            setCurrentYear(year.getFullYear())
        }

        automateCurrentYear()

    }, [currentYear])

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="first-footer-content">
                        <div className="first-content-logo">
                            <h3>Pedxo</h3>
                        </div>
                        <div className="first-content-ctc">
                            <h5>Contact us</h5>
                            <Link to={'mailto:support@pedxo.com'} className="link">support@pedxo.com</Link>
                        </div>
                    </div>
                    <div className="second-footer-content">
                        <div className="heading">
                            <h4>Company</h4>
                        </div>
                        <div className="nav-links">
                            <nav className="nav-links-holder">
                                <ul className="nav-links-content">
                                    <li className="link">
                                        <a href="/#about">About</a>
                                    </li>
                                    <li className="link">
                                        <a href="/">Work at a Startup</a>
                                    </li>
                                    <li className="link">
                                        <a href="mailto:support@pedxo.com">Email us</a>
                                    </li>
                                    <li className="link">
                                        <a href="/book-demo">Speak to an Expert</a>
                                    </li>
                                    <li className="link">
                                        <a href="/#faq">FAQ's</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="third-footer-content">
                        <div className="heading">
                            <h4>Services</h4>
                        </div>
                        <div className="nav-links">
                            <nav className="nav-links-holder">
                                <ul className="nav-links-content">
                                    <li className="link">
                                        <a href="/">Hire Talents</a>
                                    </li>
                                    <li className="link">
                                        <a href="/">Find Jobs</a>
                                    </li>
                                    <li className="link">
                                        <a href="/outsource">Outsource Projects</a>
                                    </li>
                                    <li className="link">
                                        <a href="/book-demo">Book a Demo</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="fourth-footer-content">
                        <div className="heading">
                            <h4>Socials</h4>
                        </div>
                        <div className="social-icons">                            
                            <a className='icon' href='https://web.facebook.com/people/Pedxo/100090410366859'><FaFacebook /></a>
                            <a className='icon' href='https://www.linkedin.com/company/pedxo'><FaLinkedin /></a>
                            <a className='icon' href='https://twitter.com/Pedxodotcom'><FaTwitterSquare /></a>
                        </div>
                    </div>
                </div>
                <div className="w-100 sub-footer-content row">
                    <div className="hr-con">
                        <hr />
                    </div>
                    <div className="sub-footer-item">
                        <div className="footer-pol">
                            <h5>Privacy Policy</h5>
                        </div>
                        <div className="footer-rights">
                            <h5> &copy; {currentYear} Pedxo. All rights reserved.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}