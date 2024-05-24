import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
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
        <footer className="d-flex align-items-start flex-column gap-3 col-12 footer">
            <div className="d-flex flex-column align-items-start align-self-stretch footer-container">
                <div className="d-flex align-items-start align-self-stretch gap-4 footer-content">
                    <div className="d-flex flex-column align-items-start first-footer-content">
                        <div className="first-content-logo">
                            <h3>Pedxo</h3>
                        </div>
                        <div className="align-self-stretch first-content-ctc">
                            <h5>Contact sales</h5>
                            <Link to={'mailto:support@pedxo.com'} className="link">support@pedxo.com</Link>
                        </div>
                    </div>
                    <div className="d-flex align-items-start align-self-stretch gap-4 texts-link-holder">
                        <div className="d-flex flex-column align-items-start gap-4 second-footer-content">
                            <div className="align-self-stretch heading">
                                <h4>Company</h4>
                            </div>
                            <div className="d-flex align-items-start justify-content-left col-12 nav-links">
                                <nav className="nav-links-holder">
                                    <ul className="d-flex flex-column align-items-start justify-content-left align-self-stretch gap-3 nav-links-content">
                                        <li className="link">
                                            <a href="/#about">About</a>
                                        </li>
                                        <li className="link">
                                            <a href="/work">Work at a Startup</a>
                                        </li>
                                        <li className="link">
                                            <a href="mailto:support@pedxo.com">Email us</a>
                                        </li>
                                        <li className="link">
                                            <a href="/request-a-demo">Speak to an Expert</a>
                                        </li>
                                        <li className="link">
                                            <a href="/#faq">FAQ's</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start gap-4 third-footer-content">
                            <div className="align-self-stretch heading">
                                <h4>Services</h4>
                            </div>
                            <div className="d-flex align-items-start justify-content-left col-12 nav-links">
                                <nav className="nav-links-holder">
                                    <ul className="d-flex flex-column align-items-start justify-content-left align-self-stretch gap-3 nav-links-content">
                                        <li className="link">
                                            <a href="/hire">Hire Talents</a>
                                        </li>
                                        <li className="link">
                                            <a href="/jobs">Find Jobs</a>
                                        </li>
                                        <li className="link">
                                            <a href="/outsource">Outsource Projects</a>
                                        </li>
                                        <li className="link">
                                            <a href="/request-a-demo">Book a Demo</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start gap-4 fourth-footer-content">
                        <div className="align-self-stretch heading">
                            <h4>Socials</h4>
                        </div>
                        <div className="d-flex align-items-start gap-2 social-icons">                            
                            <a className='icon' href='https://web.facebook.com/people/Pedxo/100090410366859' target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
                            <a className='icon' href='https://www.instagram.com/usepedxo' target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
                            <a className='icon' href='https://www.linkedin.com/company/pedxo' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                            <a className='icon' href='https://x.com/getpedxo?t=gpwfcv7iZBw6myC0bkGJVw&s=09' target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
                        </div>
                    </div>
                </div>
                <div className="row flex-column align-items-start align-self-stretch gap-4 w-100 sub-footer-content">
                    <div className="d-flex flex-column align-self-stretch col-12 hr-con">
                        <hr />
                    </div>
                    <div className="d-flex align-items-center justify-content-between align-self-stretch sub-footer-item">
                        <div className="d-flex align-items-center gap-4 footer-pol">
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
};