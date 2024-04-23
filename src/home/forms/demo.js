import '../homeCss/demo.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Loader } from "../../components/loader";
import { Modal } from "../../components/modal";
import axios from "axios";

export const Demo = () => {
    const [full_Name, setFull_Name] = useState('');
    const [job_title, setJob_Title] = useState('');
    const [company_name, setCompany_Name] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [employeeCount, setEmployeeCount] = useState('Company size');
    const [knowUs, setKnowUs] = useState('Choose any');
    const [pick_date, setPick_Date] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [option, setOption] = useState(false);
    const [any, setAny] = useState(false);
    const employeeNumbers = ['1 - 30', '31 - 100', '101 - 400', '401 - 1000+'];
    const Socials = ['Blog', 'Facebook', 'Google', 'Instagram', 'Referral', 'Twitter', 'Webinar', 'Linkedin', 'Others'];
    const [addFocus, setAddFocus] = useState(false);
    const [footer, setFooter] = useState(null);
    const [error, setError] = useState({});
    const [hideSize, setHideSize] = useState(false);
    const [hideSocials, setHideSocials] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState(false);
    const [icon, setIcon] = useState(null);
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState(true);

    const toggleOption = () => {
        setOption(!option)
    };

    const chooseOption = () => {
        setAny(!any)
    };

    const selected = (e) => {
        setEmployeeCount(e)
        setOption(false)
        setHideSize(false)
    };

    const choosen = (e) => {
        setKnowUs(e)
        setAny(false)
        setHideSocials(false)
    };

    const changeColor = () => {
        setAddFocus(true)
    };

    const removeColor = () => {
        setAddFocus(false)
    };

    const handleChange = (e) => {
        const {name, value} = e.target

        setError({...error, [name]: undefined})
        setFull_Name(name === 'full_Name' ? value: full_Name)
        setJob_Title(name === 'job_title' ? value: job_title)
        setCompany_Name(name === 'company_name' ? value: company_name)
        setEmail(name === 'email' ? value: email)
        setPhoneNumber(name === 'phoneNumber' ? value: phoneNumber)
        setPick_Date(name === 'pick_date' ? value: pick_date)

        extract(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employCount = document.getElementById('employ');
        const social = document.getElementById('name');

        const errMsg = {};

        const numberRegex = /\d/;
        const symbols = /[!@#$%^&*]/;
        const words = full_Name.trim().split(/\s+/);
        const space = /\s/g;
        const alphaBig = /[A-Z]/;
        const alphaSmall = /[a-z]/;

        if(!full_Name) {

            errMsg.full_Name = <p>Input require</p>

        } else if(numberRegex.test(full_Name) || symbols.test(full_Name)) {

            errMsg.full_Name = <p>Incorrect name, check your spellings</p>

        } else if (words.length < 2 || words.length === 1) {

            errMsg.full_Name = <p> Enter your full name </p>

        } else if(!job_title) {

            errMsg.job_title = <p>Input required</p>

        } else if(numberRegex.test(job_title) || symbols.test(job_title)) {

            errMsg.job_title = <p>Wrong position</p>

        } else if(!company_name) {

            errMsg.company_name = <p>Input require</p>

        } else if(numberRegex.test(company_name) || symbols.test(company_name)) {

            errMsg.company_name = <p>Incorrect company details</p>

        } else if(!email) {

            errMsg.email = <p>Input require</p>

        } else if(space.test(email)) {

            errMsg.email = <p>space are not allowed</p>

        } else if(!phoneNumber) {

            errMsg.phoneNumber = <p>Input required</p>

        } else if(!numberRegex.test(phoneNumber) || alphaBig.test(phoneNumber) || alphaSmall.test(phoneNumber)) {

            errMsg.phoneNumber = <p>wrong phone number format</p>

        } else if(employCount.textContent === 'Company size') {

            setHideSize(true)
            errMsg.employeeCount = 'you are required to choose an option'

        } else if(social.textContent === 'Choose any') {

            setHideSocials(true)
            errMsg.knowUs = 'you are required to choose an option'

        } else if(!pick_date) {

            errMsg.pick_date = <p>choose your available time and day</p>

        } else if(full_Name && job_title && company_name && email && phoneNumber && employCount && knowUs && pick_date) {

            const button = document.getElementById('button');
            const button2 = document.getElementById('btn');

            const bookDemoDetails = {
                full_Name,
                job_title,
                company_name,
                email,
                phoneNumber,
                employeeCount,
                knowUs,
                pick_date
            };


            const url = 'https://pedxo-backend.onrender.com/demo';

            try {
                const res = await axios.post(url, bookDemoDetails);

                if(res) {

                    setSuccess(true);
                    setForm(false);
                    
                };

                button.disabled = true;
                button2.style.opacity = '50%'
                setLoading(true);

            } catch(err) {

                button.disabled = false
                button2.style.opacity = '100%'
                
                setIcon(
                    <div className="error">
                        <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                );

                if(err){
                    if(err.response) {
                        const {status} = err.response;
                        if(status === 500 && err.response.data.message === 'Internal server error'){
                            setMessage('Server timeout');
                        };
                    }

                    if(err.message === "Network Error"){
                        setMessage('Network error, check your network');
                    }
                }

            } finally {
                setLoading(false)
            }

        }


        if(Object.keys(errMsg).length > 0) {
            setError(errMsg);
            return
        }
    }

    const extract = (datetime) => {
        const date = datetime.split("T")[0];
        const time = datetime.split("T")[1]?.substring(0, 5);

        const hour = parseInt(time?.split(":")[0]);

        const ampm = hour < 12 ? "AM" : "PM";

        const exTime = time ? `${time} ${ampm}` : "";
        const exDate = date

        setTime(exTime);
        setDay(exDate)
    };


    useEffect(() => {
        if(message) {
            setMessages(true);

            const rem = setTimeout(() => {
                setMessages(false)
            }, 2000);

            return () => clearTimeout(rem);
        }

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

    }, [message])

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
                            {form   &&  <div className='inner-form'>
                                            <form method='post' className='form' autoComplete='off' onSubmit={handleSubmit}>
                                                <div className='input-holder'>
                                                    <div className='first-input-field-holder'>
                                                        <div className='name-field-holder'>
                                                            <label>Full Name</label>
                                                            <input name='full_Name' value={full_Name} type='text' placeholder='Enter your full name' onChange={(e) => handleChange(e)}></input>
                                                            {error.full_Name}
                                                        </div>
                                                        <div className='job-field-holder'>
                                                            <label>Job Title</label>
                                                            <input name='job_title' value={job_title} type='text' placeholder='Enter job title, e.g CEO' onChange={(e) => handleChange(e)}></input>
                                                            {error.job_title}
                                                        </div>
                                                    </div>                                    
                                                    <div className='second-input-field-holder'>
                                                        <div className='company-field-holder'>
                                                            <label>Company Name</label>
                                                            <input name='company_name' value={company_name} type='text' placeholder='Enter company name' onChange={(e) => handleChange(e)}></input>
                                                            {error.company_name}
                                                        </div>
                                                        <div className='email-field-holder'>
                                                            <label>Email</label>
                                                            <div className='position-relative w-100 ico'>
                                                                <input name='email' value={email} type='email' placeholder='Enter work email' onFocus={changeColor} onBlur={removeColor} onChange={(e) => handleChange(e)}></input>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={addFocus ? 'mail focus' : 'mail'}>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8323 17.5C17.6732 17.5 19.1656 16.0076 19.1656 14.1667V6.68557C19.1659 6.67283 19.1659 6.66005 19.1656 6.64725V5.83333C19.1656 3.99238 17.6732 2.5 15.8323 2.5H4.16559C2.32464 2.5 0.832253 3.99238 0.832253 5.83333V6.64726C0.831957 6.66005 0.831958 6.67282 0.832253 6.68556V14.1667C0.832253 16.0076 2.32464 17.5 4.16559 17.5H15.8323ZM2.49892 14.1667C2.49892 15.0871 3.24511 15.8333 4.16559 15.8333H15.8323C16.7527 15.8333 17.4989 15.0871 17.4989 14.1667V7.89753L11.2369 10.4023C10.4422 10.7202 9.55565 10.7202 8.76095 10.4023L2.49892 7.89753V14.1667ZM10.6179 8.85488L17.4989 6.10247V5.83333C17.4989 4.91286 16.7527 4.16667 15.8323 4.16667H4.16559C3.24511 4.16667 2.49892 4.91286 2.49892 5.83333V6.10247L9.37993 8.85488C9.77729 9.01382 10.2206 9.01382 10.6179 8.85488Z"/>
                                                                </svg>
                                                            </div>
                                                            {error.email}
                                                        </div>
                                                    </div>
                                                    <div className='third-input-field-holder'>
                                                        <div className='number-field-holder'>
                                                            <label>Phone Number</label>
                                                            <input name='phoneNumber' value={phoneNumber} type='tel' placeholder='Enter phone number with country code' onChange={(e) => handleChange(e)}></input>
                                                            {error.phoneNumber}
                                                        </div>
                                                        <div className='count-field-holder'>
                                                            <label>Employees CountDown</label>
                                                            <div className='count-input-holder'>
                                                                <div className='count-input'  onClick={() => toggleOption()}>
                                                                    <div id='employ' className={employeeCount === 'Company size' ? 'input' : 'option'}>{employeeCount}</div>
                                                                    <FaChevronDown className={option ? 'active' : 'fa'} />
                                                                </div>
                                                                {hideSize && <p>{error.employeeCount}</p>}
                                                                <div className={option ? 'select-box open' : 'select-box'}>
                                                                    <ul className='select-list'>
                                                                        {employeeNumbers.map((employeeNumber) => (
                                                                            <li className='list' onClick={() => selected(employeeNumber.replace(/\s/g, ''))}>
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
                                                                    <div id='name' className={knowUs === 'Choose any' ? 'input' : 'option'}>{knowUs}</div>
                                                                    <FaChevronDown className={any ? 'active' : 'fa'} />
                                                                </div>
                                                                {hideSocials && <p>{error.knowUs}</p>}
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
                                                            <input name='pick_date' value={pick_date} type='datetime-local' onChange={(e) => handleChange(e)}></input>
                                                            {error.pick_date}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='submit-item-holder'>
                                                    <div className='submit-des'>
                                                        <h6>We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services.</h6>
                                                    </div>
                                                    <div className='submit-button-link-holder'>
                                                        <div className='submit-button' id='btn'>
                                                            <button type='submit' id='button'>
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
                            }
                            {success && <div className="success-message w-100 d-flex flex-column justify-content-center">
                                            <div className="success-hold">
                                                <div className="success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
                                                        <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div className="success-text">
                                                    <p className='text'>Your demo have been booked successfully <br /> <span>{full_Name}</span></p>
                                                </div>
                                                <div className="success-info">
                                                    <p className='info'>Your meeting is confirmed for <span>{day}</span> by <span>{time}</span> with <span>Pedxo</span>. Make sure to update your calander so as to be available for the meeting. Please note that 30 minutes before the Scheduled time our team will contact you to remind you on time</p>
                                                </div>
                                            </div>
                                        </div>
                            }
                        </div>
                    </div>
                </div>
                {loading && <Loader />}
                {messages && <Modal icon={icon} message={message} />}
                {footer}
            </div>
        </div>
    )
}