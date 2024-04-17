import '../homeCss/demo.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export const Demo = () => {
    const [selectedOption, setSelectedOption] = useState('Company size');
    const [chooseSocial, setChooseSocial] = useState('Choose any');
    const [option, setOption] = useState(false);
    const [any, setAny] = useState(false);
    const employeeNumbers = ['1 - 30', '31 - 100', '101 - 400', '401 - 1000+'];
    const Socials = ['Blog', 'Facebook', 'Google', 'Instagram', 'Referral', 'Twitter', 'Webinar', 'Linkedin', 'Others'];
    const [addFocus, setAddFocus] = useState(false);
    const [footer, setFooter] = useState(null);

    const toggleOption = () => {
        setOption(!option)
    };

    const chooseOption = () => {
        setAny(!any)
    };

    const selected = (e) => {
        setSelectedOption(e)
        setOption(false)
    };

    const choosen = (e) => {
        setChooseSocial(e)
        setAny(false)
    };

    const changeColor = () => {
        setAddFocus(true)
    };

    const removeColor = () => {
        setAddFocus(false)
    };

    useEffect(() => {
        const showFooter = () => {
            if(window.innerWidth > 900) {
                setFooter(<Footer/> );
            } else {
                setFooter(null)
            }
        };

        showFooter();

        window.addEventListener('resize', showFooter);

        return () => {
            window.removeEventListener('resize', showFooter);
        };

    }, [])

    return (
        <div className='demo w-100'>
            <div className='sub-demo'>
                <Header />
                <div className='inner-demo p-5 container'>
                    <div className='demo-holder'>
                        <div className='demo-heading'>
                            <div className='demo-first-heading'>
                                <h4>Book a Demo</h4>
                            </div>
                            <div className='demo-second-heading'>
                                <h6>Schedule a 30-minute product demo with expert Q&A.</h6>
                            </div>
                        </div>
                        <div className='form-holder'>
                            <div className='inner-form'>
                                <form method='post' className='form'>
                                    <div className='input-holder'>
                                        <div className='first-input-field-holder'>
                                            <div className='name-field-holder'>
                                                <label>Full Name</label>
                                                <input type='text' placeholder='Enter your full name'></input>
                                            </div>
                                            <div className='job-field-holder'>
                                                <label>Job Title</label>
                                                <input type='text' placeholder='Enter job title, e.g CEO'></input>
                                            </div>
                                        </div>                                    
                                        <div className='second-input-field-holder'>
                                            <div className='company-field-holder'>
                                                <label>Company Name</label>
                                                <input type='text' placeholder='Enter company name'></input>
                                            </div>
                                            <div className='email-field-holder'>
                                                <label>Email</label>
                                                <input type='email' placeholder='Enter work email' onFocus={changeColor} onBlur={removeColor}></input>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={addFocus ? 'mail focus' : 'mail'}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8323 17.5C17.6732 17.5 19.1656 16.0076 19.1656 14.1667V6.68557C19.1659 6.67283 19.1659 6.66005 19.1656 6.64725V5.83333C19.1656 3.99238 17.6732 2.5 15.8323 2.5H4.16559C2.32464 2.5 0.832253 3.99238 0.832253 5.83333V6.64726C0.831957 6.66005 0.831958 6.67282 0.832253 6.68556V14.1667C0.832253 16.0076 2.32464 17.5 4.16559 17.5H15.8323ZM2.49892 14.1667C2.49892 15.0871 3.24511 15.8333 4.16559 15.8333H15.8323C16.7527 15.8333 17.4989 15.0871 17.4989 14.1667V7.89753L11.2369 10.4023C10.4422 10.7202 9.55565 10.7202 8.76095 10.4023L2.49892 7.89753V14.1667ZM10.6179 8.85488L17.4989 6.10247V5.83333C17.4989 4.91286 16.7527 4.16667 15.8323 4.16667H4.16559C3.24511 4.16667 2.49892 4.91286 2.49892 5.83333V6.10247L9.37993 8.85488C9.77729 9.01382 10.2206 9.01382 10.6179 8.85488Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='third-input-field-holder'>
                                            <div className='number-field-holder'>
                                                <label>Phone Number</label>
                                                <input type='tel' placeholder='Enter phone number with country code'></input>
                                            </div>
                                            <div className='count-field-holder'>
                                                <label>Employees CountDown</label>
                                                <div className='count-input-holder'>
                                                    <div className='count-input'  onClick={() => toggleOption()}>
                                                        <div className={selectedOption === 'Company size' ? 'input' : 'option'}>{selectedOption}</div>
                                                        <FaChevronDown className={option ? 'active' : 'fa'} />
                                                    </div>
                                                    <div className={option ? 'select-box open' : 'select-box'}>
                                                        <ul className='select-list'>
                                                            {employeeNumbers.map((employeeNumber) => (
                                                                <li className='list' onClick={() => selected(employeeNumber)}>
                                                                    <p>{employeeNumber}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='fourth-input-field-holder'>
                                            <div className='name-field-holder'>
                                                <label>How did you hear about us?</label>
                                                <div className='social-input-holder'>
                                                    <div className='social-input'  onClick={() => chooseOption()}>
                                                        <div className={chooseSocial === 'Choose any' ? 'input' : 'option'}>{chooseSocial}</div>
                                                        <FaChevronDown className={any ? 'active' : 'fa'} />
                                                    </div>
                                                    <div className={any ? 'social-box open' : 'social-box'}>
                                                        <ul className='social-list'>
                                                            {Socials.map((Social) => (
                                                                <li className='list' onClick={() => choosen(Social)}>
                                                                    <p>{Social}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='date-field-holder'>
                                                <label>Pick time/date</label>
                                                <input type='datetime-local'></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='submit-item-holder'>
                                        <div className='submit-des'>
                                            <h6>We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services.</h6>
                                        </div>
                                        <div className='submit-button-link-holder'>
                                            <div className='submit-button'>
                                                <button type='submit'>
                                                    <p className='pa'>Book demo</p>
                                                </button>
                                            </div>
                                            <div className='submit-link'>
                                                <p className='pa'>Contractor or employee</p>
                                                <Link to='/register' className='link'>Sign up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {footer}
            </div>
        </div>
    )
}