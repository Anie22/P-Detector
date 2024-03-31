import React from 'react';
import '../homeCss/home.css';
import aboutImg from '../../Img/aboutImg.png';
import { FaArrowRight, FaPlus, FaTimes} from 'react-icons/fa';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Footer } from '../../components/footer';
import { Link } from 'react-router-dom';


export const Home = () => {
    const [devCount, setDevCount] = useState(0);
    const [designCount, setDesignCount] = useState(0);
    const [contractCount, setContractCount] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);

    const selectedFaq = (i) => {
        if(activeFaq === i){
            setActiveFaq(null)
        } else {
            setActiveFaq(i)
        }
    }

    const bookDemo = () => {
        window.location.href = '/book-demo'
    }

    const serviceSlide = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        arrows: true
    }

    const testimonal = {
        dots: false,
        infinite: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5,
        arrows: false,
        cssEase: 'linear'
    }

    useEffect(() => {
        const dCount = setInterval(() => {
            
            if(devCount < 2000){
                setDevCount(prevCount => prevCount + 10)
            } else {
                return
            }

        }, 10);

        return () => clearInterval(dCount)
    }, [devCount])

    useEffect(() => {
        const desCount = setInterval(() => {
            
            if(designCount < 900){
                setDesignCount(prevCount => prevCount + 10)
            } else {
                return
            }

        }, 10);

        return () => clearInterval(desCount)
    }, [designCount])

    useEffect(() => {
        const conCount = setInterval(() => {
            
            if(contractCount < 500){
                setContractCount(prevCount => prevCount + 10)
            } else {
                return
            }

        }, 10);

        return () => clearInterval(conCount)
    }, [contractCount])

    const remoteInfos = [
        {title: 'Hire', subTitle: 'employees', des: 'Join the fleet of companies that are benefiting from remote work arrangements by allowing their employees to work from home while saving a lot of cash.', icons: <FaUser className='fa' />},
        {title: 'Explore', subTitle: 'job offers', des: 'Find remote jobs and work from anywhere you wish.', icons: <FaBriefcase className='fa' />},
        {title: 'Outsource', subTitle: 'software development', des: 'When you outsource your software project to our in-house engineers and product Managers, we take care of the development processes while you focus on other things that matter and never have to worry about the technical aspects, hiring or management.', icons: <FaUser className='fa' />},
    ]

    const services = [
        {title: <h4>“<span>Seamlessly Hire</span>, Onboard, Manage and Pay your employees and contractors all in one platform.”</h4>, buttonText: 'Hire talents'},
        {title: <h4>“Directly connecting <span>remote workers</span> with employers offering remote job listings.”</h4>, buttonText: 'Apply for Remote Jobs'},
        {title: <h4>“All your <span>technical needs covered </span> under a single monthly subscription.”</h4>, buttonText: "Let's Build"},
    ]

    const testimonals = [
        {info: "“As a seasoned sales professional, I've used various platforms to explore job opportunities in the past, but none have impressed me as much as this one. The platform's user-friendly interface, coupled with its extensive network of employers, made it stand out from the crowd.”", name: 'Ngozi Onwuka', role: 'Sales Manager'},
        {info: "“This platform streamlined our hiring process, delivering top talent efficiently. Its intuitive interface and personalized job matches were game-changers. Thanks to this platform, I landed my dream job at a reputable tech company, and I couldn't be happier with the outcome.”", name: 'Chika Okoro', role: 'Marketing Manager'},
        {info: "“Managing recruitment processes for a large organization can be quite daunting, but this platform has been a game-changer for us. The robust suite of tools and features provided has significantly streamlined our hiring operations and improved our overall efficiency.”", name: 'Ibrahim Abubakar', role: ' Human Resources Manager'},
        {info: "“Transitioning to a new role in the finance industry can be quite challenging, especially when navigating through countless job listings and competing with other qualified candidates. However, this platform made the job search process a breeze for me.”", name: 'Temitope Adekunle', role: 'Financial Analyst'},
    ]

    const faqs = [
        {ques: 'How much does Pedxo charge?', ans: 'The digital world is changing. Brands need to be fast, creative, and flexible. That’s where no-code comes in: a cutting-edge movement which...'},
        {ques: 'What is the timeframe for project delivery?'},
        {ques: 'How to start working with Pedxo?', ans: 'To hire Pedxo is very simple. Below are the steps to follow;', lists: [
            {listAns: 'Talk with our team about your idea, market and challenges.'},
            {listAns: 'We sign an NDA if required, to maintain high level of privacy.'},
            {listAns: 'After intensive project review and paperwork, we’ll come back with a hand picked engineers whose skills and experience are best align with your needs.'},
        ], con: 'Once approved, the team assigned to your project will start working and sending you updates regularly'},
        {ques: 'What is an MVP and why is it so important?'},
        {ques: 'Why choose Pedxo?'}
    ]


    return (
        <div className='body'>
            <section className='hero'>
                <div className='sub-hero-sec'>
                    <div className='inner-hero-sec'>
                        <div className='svg-holder'>
                            <div className='left-svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="787" viewBox="0 0 1440 787" fill="none">
                                    <g mix-blend-mode='plus-lighter' opacity="0.3">
                                        <path d="M334.61 97.648C-41.9301 -209.482 -303.937 178.002 -387.942 410.286C-387.981 410.395 -388 410.506 -388 410.622V792.299C-388 792.845 -387.591 793.29 -387.045 793.299C242.061 803.452 1516.46 829.174 1563.94 804.844C1623.31 774.416 805.393 481.648 334.61 97.648Z" fill="url(#paint0_linear_101_340)" fill-opacity="0.2"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_101_340" x1="686.987" y1="137.946" x2="667.308" y2="855.822" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F9CC67"/>
                                            <stop offset="1" stop-color="#EFCE8A" stop-opacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='right-svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="637" viewBox="0 0 1440 637" fill="none">
                                    <g mix-blend-mode="plus-lighter" opacity="0.3" filter="url(#filter0_i_101_341)">
                                        <path d="M1004.19 92.9971C1311 -158.312 1524.48 158.718 1592.94 348.798C1592.98 348.906 1593 349.017 1593 349.132V661.239C1593 661.787 1592.59 662.233 1592.04 662.238C1079.19 666.996 28.9806 664 -2 664C-12.5 664 620.583 407.221 1004.19 92.9971Z" fill="url(#paint0_linear_101_341)" fill-opacity="0.15"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_101_341" x="-2.12891" y="0" width="1595.13" height="668.931" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset dy="4"/>
                                                    <feGaussianBlur stdDeviation="17.6"/>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.843137 0 0 0 0 0.415686 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_101_341"/>
                                        </filter>
                                            <linearGradient id="paint0_linear_101_341" x1="717.064" y1="125.973" x2="733.236" y2="713.401" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#F9CC67"/>
                                            <stop offset="1" stop-color="#EFCE8A" stop-opacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='hero-text-holder'>
                            <div className='hero-text-con'>
                                <div className='hero-text-hld'>
                                    <div className='heading'>
                                        <h4>The Workforce Platform that brings the world to work.</h4>
                                    </div>
                                    <div className='par'>
                                        <p>Pedxo makes it easy for businesses to hire and manage remote workers anywhere in the world.</p>
                                    </div>
                                </div>
                                <div className='hero-links-hld'>
                                    <div className='first-link'>
                                        <Link to={'/hire'} className='link'>
                                            <p className='text'>Hire Talent</p>
                                            <FaArrowRight className='fa' />
                                        </Link>
                                    </div>
                                    <div className='second-link'>
                                        <Link to={'/talents'} className='link'>Outsource</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='metrix w-100'>
                <div className='container'>
                    <div className='metrix-holder-con'>
                        <div className='metrix-dev'>
                            <div className='metrix-dev-count'>
                                <h2>{devCount}</h2>
                                <FaPlus />
                            </div>
                            <div className='metrix-dev-des'>
                                <p>Developers <br/> join every month</p>
                            </div>
                        </div>
                        <div className='metrix-design'>
                            <div className='metrix-design-count'>
                                <h2>{designCount}</h2>
                                <FaPlus />
                            </div>
                            <div className='metrix-design-des'>
                                <p>Designers <br/> join every month</p>
                            </div>
                        </div>
                        <div className='metrix-contract'>
                            <div className='metrix-contract-count'>
                                <h2>{contractCount}</h2>
                                <FaPlus />
                            </div>
                            <div className='metrix-contract-des'>
                                <p>Contractors <br/> join every month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec p-5 w-100">
                <div className="sub-abt-sec container my-4">
                    <div className="row items-center">
                        <div className="abt-txt-sec col-4 col-lg-6">
                            <div className="abt-in d-flex gap-2">
                                <div className="abt-in-bdr"></div>
                                <div className="abt-in-title">
                                    <h4>About us</h4>
                                </div>
                            </div>
                            <div className='abt-info-sec'>
                                <div className='abt-info-title'>
                                    <h2>Professional <span>employer organization</span> services and payroll services.</h2>
                                </div>
                                <div className='abt-info-par'>
                                    <p>Recruiting new talents is time-consuming especially for small teams, we're here to simplify that process, help you identify, hire and onboard best remote talents single-handedly.</p>
                                </div>
                                <div className='abt-info-btn-hld d-flex justify-content-between mb-3 gap-3'>
                                    <div className='book'>
                                        <button onClick={() => bookDemo()}>
                                           <p>Book demo</p> 
                                           <FaArrowRight />
                                        </button>
                                    </div>
                                    <div className='read'>
                                        <button>
                                            <p>Read about us on Nairametrics</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='abt-img-hld col-4 col-lg-4 d-flex items-center justify-content-center'>
                            <div className='img-sec'>
                                <img className='img-fluid' src={aboutImg} alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='remote-work p-5'>
                <div className='sub-remote-work my-4'>
                    <div className='inner-remote-work container'>
                        <div className='remote-work-content w-100'>
                            <div className='first-content'>
                                <div className='sub-first-content'>
                                    <div className='border'></div>
                                    <div className='title'>
                                        <h4>Remote work simplified.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='second-content'>
                                <div className='second-content-heading'>
                                    <h2>The nature of work is changing rapidly. Businesses need to act <span>fast, creatively and more flexibly.</span></h2>
                                </div>
                                <div className='second-content-items'>
                                    {remoteInfos.map((remoteInfo) => (
                                        <div className='sub-content'>
                                            <div className='heading'>
                                                {remoteInfo.icons}
                                                <h5>{remoteInfo.title}<br/> <span>{remoteInfo.subTitle}</span></h5>
                                            </div>
                                            <div className='paragraph'>
                                                <div className='par-des'>
                                                    <p>{remoteInfo.des}</p>
                                                </div>
                                                <div className='par-icon'>
                                                    <FaArrowRight className='fa' />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-5 services w-100'>
                <div className='sub-service-holder'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 500" fill="none" className='svg-design'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M837.008 122.85C794.743 133.036 761.249 153.249 714.781 203.656C679.537 241.887 676.755 285.46 672.199 356.819L672.065 358.923C667.635 428.252 660.222 517.324 582.762 595.846C498.371 681.393 405.813 692.729 332.123 701.754C321.478 703.057 311.226 704.313 301.45 705.737C261.445 711.564 227.218 719.602 194.599 738.583C162.476 757.276 128.026 788.926 92.6082 848L0 788.902C43.3253 716.64 90.3106 670.29 141.102 640.733C191.399 611.465 241.567 601.004 286.226 594.498C298.578 592.699 310.409 591.155 321.796 589.668C395.115 580.097 449.997 572.932 506.443 515.713C552.674 468.848 559.139 418.351 563.408 351.534C563.664 347.531 563.908 343.429 564.157 339.237C567.86 276.886 572.741 194.721 635.876 126.234C692.341 64.9836 743.588 29.9974 812.238 13.4533C873.653 -1.34719 947.31 -0.547472 1043.68 0.498852C1046.76 0.532329 1049.87 0.566057 1053 0.599537L1051.87 112.936C945.211 111.795 884.542 111.395 837.008 122.85Z" fill="#E7BB3F"/>
                    </svg>
                    <div className='services-holder'>
                        <div className='services-content-holder'>
                            <Slider {...serviceSlide}>
                                {services.map((service) => (
                                    <div className='service-content'>
                                        <div className='services-text'>
                                            {service.title}
                                        </div>
                                        <div className='service-button-holder'>
                                            <button>
                                                <p>{service.buttonText}</p>
                                                <FaArrowRight className='fa' />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonals p-5'>
                <div className='tes-hld'>
                    <div className='in-tes'>
                        <div className='sub-tes'>
                            <div className='tes-hd-con container'>
                                <div className='sub-tes-hld'>
                                    <div className='sub-tes-sec'>
                                        <div className='sub-tes-bdr'></div>
                                        <div className='seb-tes-txt'>
                                            <h4>Testimonals</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub-tes-hd'>
                                    <h2>What our <span>Clients</span> say</h2>
                                </div>
                            </div>
                            <div className='tes-cont-bdy'>
                                <Slider {...testimonal}>
                                    {testimonals.map((testimonal) => (
                                        <div className='sub-tes-con'>
                                            <div className='in-tes-con'>
                                                <div className='tes-con-info'>
                                                    <p>{testimonal.info}</p>
                                                </div>
                                                <div className='tes-con-name'>
                                                    <h4>{testimonal.name}</h4>
                                                    <h6>{testimonal.role}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='faq p-5'>
                <div className='sub-faq-sec my-5'>
                    <div className='inner-faq-sec container'>
                        <div className='faq-hld'>
                            <div className='faq-heading'>
                                <div className='faq-border'></div>
                                <div className='faq-heading-sec'>
                                    <h4>FAQ's</h4>
                                </div>
                            </div>
                            <div className='faq-ques-hld'>
                                <div className='faq-ques-head'>
                                    <h2>We've <span>answered</span> your questions</h2>
                                </div>
                                <div className='faq-ques-sec'>
                                    <div className='sub-faq-ques'>
                                        {faqs.map((faq, i) => (
                                            <div className='in-faq-ques' key={i}>
                                                <div className='faq-ques-head'>
                                                    <h3>{faq.ques}</h3>
                                                    <div className='icon-holder' onClick={() => selectedFaq(i)}>
                                                        {activeFaq === i ? <FaTimes className='faPlus' /> : <FaPlus className='faPlus' />}
                                                    </div>
                                                </div>
                                                <div className={activeFaq === i ? 'faq-ques-body open' : 'faq-ques-body'}>
                                                    <div className='des'>
                                                        <p>{faq.ans}</p>
                                                        {faq.lists && (
                                                            <ol className='des-list'>
                                                                {faq.lists.map((subfaq, index) => (
                                                                    <li key={index}>{subfaq.listAns}</li>
                                                                ))}
                                                            </ol>
                                                        )}
                                                        <p>{faq.con}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='buld w-100'>
                <div className='buld-sec'>
                    <div className='buld-sec-hld'>
                        <div className='in-buld-sec'>
                            <div className='buld-des-hld'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1007" height="352" viewBox="0 0 1007 352" fill="none">
                                    <path d="M1152 459C971.837 263.957 767.043 385.741 581.954 263.958C440.453 170.854 550.199 56.6881 432.405 -26.2502C314.651 -109.16 238.519 -108.224 0.999985 -106.576" stroke="url(#paint0_linear_101_625)" stroke-width="121"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_101_625" x1="576.5" y1="459" x2="442.5" y2="18.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#383E49" stop-opacity="0.26"/>
                                            <stop offset="1" stop-color="#8695AF" stop-opacity="0.15"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='buld-sec-text'>
                                <h4>Let's create great things together.</h4>
                                <button className='link-button'>
                                    <p>Get Started</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}