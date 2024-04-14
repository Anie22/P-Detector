import React from "react";
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { useState, useEffect } from "react";
import '../homeCss/outsource.css';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export const Outsource = () => {
    const [selectedOption, setSelectedOption] = useState('Company size');
    const [chooseSocial, setChooseSocial] = useState('Choose any');
    const [role, setRole] = useState("Choose which teams you'll need e.g(UI/UX, devOps)")
    const [option, setOption] = useState(false);
    const [any, setAny] = useState(false);
    const [team, setTeam] = useState(false);
    const [check, setCheck] = useState([]);
    const employeeNumbers = ['1 - 30', '31 - 100', '101 - 400', '401 - 1000+'];
    const Socials = ['Blog', 'Facebook', 'Google', 'Instagram', 'Referral', 'Twitter', 'Webinar', 'Linkedin', 'Others'];
    const roles = ['UI/UX', 'Devops', 'Mobile Engineer', 'Frontend Engineer', 'Backend Engineer', 'Full-stack Engineering', 'Data Scientist'];
    const [addFocus, setAddFocus] = useState(false);
    const [footer, setFooter] = useState(null);

    const toggleOption = () => {
        setOption(!option)
    };

    const chooseOption = () => {
        setAny(!any)
    };

    const openTeams = () => {
        setTeam(true)
    };

    const checked = (rle) => {
        if (check.includes(rle)) {
            setCheck(check.filter(item => item !== rle));
        } else {
            setCheck([...check, rle]);
        }
    };

    const selected = (e) => {
        setSelectedOption(e)
        setOption(false)
    };

    const choosen = (e) => {
        setChooseSocial(e)
        setAny(false)
    };

    const preventScroll = (e) => {
        if(e.keyCode === 38 || e.keyCode === 40){
            e.preventDefault()
        }
    };

    const changeColor = () => {
        setAddFocus(true)
    };

    const removeColor = () => {
        setAddFocus(false)
    };

    const done = () => {
        const height = document.getElementById('roleh');
        const ico = document.getElementById('fa');
        if(check) {
            const addComa = check.join(', ');
            setRole(addComa);
            setTeam(false);

            if(check.length > 4 || check.length === 4){
                height.style.height = 'fit-content';
                height.style.padding = '7px 10px';
                ico.style.fontSize = '25px';
            } else {
                height.style.height = '56px';
                height.style.padding = '20px 16px';
                ico.style.fontSize = '16px';
            } 
        } 
    };

    const cancel = () => {
        const original = "Choose which teams you'll need e.g(UI/UX, devOps)"
        setRole(original)
        setTeam(false)
        setCheck([])
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
        <div className="outsource">
            <div className="sub-outsource-holder">
                <Header />
                <div className='inner-sec p-5 container'>
                    <div className='outsource-holder'>
                        <div className='desc-heading'>
                            <div className='desc-first-heading'>
                                <h4>Outsource Project</h4>
                            </div>
                            <div className='desc-second-heading'>
                                <h6>Bring your idea to market quickly with just minimal resources.</h6>
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
                                        </div>  
                                        <div className='second-input-field-holder'>
                                            <div className='job-field-holder'>
                                                <label>Job Title</label>
                                                <input type='text' placeholder='Enter job title, e.g CEO'></input>
                                            </div>
                                            <div className='number-field-holder'>
                                                <label>Phone Number</label>
                                                <input type='number' placeholder='Enter phone number with country code' onKeyDown={preventScroll}></input>
                                            </div>
                                        </div>                                  
                                        <div className='third-input-field-holder'>
                                            <div className='count-field-holder'>
                                                <label>Employees CountDown</label>
                                                <div className='count-input-holder'>
                                                    <div className='count-input'>
                                                        <div className={selectedOption === 'Company size' ? 'input' : 'option'}>{selectedOption}</div>
                                                        <FaChevronDown onClick={() => toggleOption()} className={option ? 'active' : 'fa'} />
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
                                            <div className='email-field-holder'>
                                                <label>Email</label>
                                                <input type='email' placeholder='Enter work email' onFocus={changeColor} onBlur={removeColor}></input>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={addFocus ? 'mail focus' : 'mail'}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8323 17.5C17.6732 17.5 19.1656 16.0076 19.1656 14.1667V6.68557C19.1659 6.67283 19.1659 6.66005 19.1656 6.64725V5.83333C19.1656 3.99238 17.6732 2.5 15.8323 2.5H4.16559C2.32464 2.5 0.832253 3.99238 0.832253 5.83333V6.64726C0.831957 6.66005 0.831958 6.67282 0.832253 6.68556V14.1667C0.832253 16.0076 2.32464 17.5 4.16559 17.5H15.8323ZM2.49892 14.1667C2.49892 15.0871 3.24511 15.8333 4.16559 15.8333H15.8323C16.7527 15.8333 17.4989 15.0871 17.4989 14.1667V7.89753L11.2369 10.4023C10.4422 10.7202 9.55565 10.7202 8.76095 10.4023L2.49892 7.89753V14.1667ZM10.6179 8.85488L17.4989 6.10247V5.83333C17.4989 4.91286 16.7527 4.16667 15.8323 4.16667H4.16559C3.24511 4.16667 2.49892 4.91286 2.49892 5.83333V6.10247L9.37993 8.85488C9.77729 9.01382 10.2206 9.01382 10.6179 8.85488Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='fourth-input-field-holder'>
                                            <div className="team-field-holder">
                                                <label>Which team will you be needing for the project?</label>
                                                <div className="team-input-holder">
                                                    <div className="team-input"  id="roleh">
                                                        <div className={role === "Choose which teams you'll need e.g(UI/UX, devOps)" ? "input" : 'option'}>{role}</div>
                                                        <FaChevronDown onClick={() => openTeams()} className={team ? 'active' : "fa"} id="fa"/>
                                                    </div>
                                                    <div className={team ? 'select-box open' : "select-box"}>
                                                        <ul className= "select-list">
                                                            {roles.map((rle) => (
                                                                <li className="list">
                                                                    <div onClick={() => checked(rle)} className={check.indexOf(rle) !== -1 ? "list-checkbox click" : "list-checkbox"}>
                                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className={check.indexOf(rle) !== -1 ? 'fa show' : 'fa'} xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                                        </svg>
                                                                    </div>
                                                                    <p>{rle}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="select-button">
                                                            <div onClick={() => cancel()} className="first-button">
                                                                <button type="button">Cancel</button>
                                                            </div>
                                                            <div onClick={() => done()} className="second-button">
                                                                <button type="button">Done</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='name-field-holder'>
                                                <label>How did you hear about us?</label>
                                                <div className='social-input-holder'>
                                                    <div className='social-input'>
                                                        <div className={chooseSocial === 'Choose any' ? 'input' : 'option'}>{chooseSocial}</div>
                                                        <FaChevronDown onClick={() => chooseOption()} className={any ? 'active' : 'fa'} />
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
                                        </div>
                                        <div className="fifth-input-field-holder">
                                            <div className="des-field-holder">
                                                <label>Describe your project</label>
                                                <textarea cols={30} rows={50} placeholder="Describe here"></textarea>
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
                                                    <p className='pa'>Submit</p>
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