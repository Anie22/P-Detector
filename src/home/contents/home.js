import React from 'react';
import '../homeCss/home.css';
import { FaArrowRight} from 'react-icons/fa';
import { useEffect, useMemo, useState} from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom';


export const Home = () => {
    const welcomeMsg = useMemo(
        () => ['Welcome to Pdetector'], []
    )

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0)
    const [clear, setClear] = useState(false)

    useEffect(() => {
        if(wordIndex < welcomeMsg.length){
            if(!clear){
                if(index < welcomeMsg[wordIndex].length){
                    const typing = setTimeout(() => {
                        setText(prev => prev + welcomeMsg[wordIndex].charAt(index))
                        setIndex(prev => prev + 1)
                    }, 350);

                    return () => clearTimeout(typing);
                } else {
                    const delay = setTimeout(() => {
                        setClear(true)
                    }, 350);
                    return () => clearTimeout(delay)
                }
            } else {
                if (text.length > 0) {
                    const clear = setTimeout(() => {
                        setText(prev => prev.slice(0, -1))
                    }, 350);
                    return () => clearTimeout(clear)
                } else {
                    setClear(false)
                    setIndex(0)
                    setWordIndex(prev => prev + 1)
                }
            }
        } else {
            const reset = setTimeout(() => {
                setText('')
                setIndex(0)
                setWordIndex(0)
            }, 350);

            return () => clearTimeout(reset)
        }
        document.title = 'P-Detector';
    }, [text, welcomeMsg, clear, index, wordIndex]);


    return (
        <div className='overflow-hidden bg-dark body'>
            <section className='position-relative col-12 hero'>
                <div className='d-flex align-items-center col-12 sub-hero-sec'>
                    <div className='inner-hero-sec'>
                        <div className='position-absolute d-flex align-items-center justify-content-center top-0 start-0 col-12 h-100 hero-text-holder'>
                            <div className='d-inline-flex flex-column align-items-center gap-4 hero-text-con col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center gap-3 col-12 hero-text-hld'>
                                    <div className='heading'>
                                        <h4>{text} <span className='blink'>|</span></h4>
                                    </div>
                                    <div className='col-12 text-center par'>
                                        <p>An application built in combating plagarism and protecting your work</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-4 col-12 p-lg-0 hero-links-hld'>
                                    <div className='first-link'>
                                        <Link to={'/login'} className='d-flex align-items-center justify-content-center gap-2 text-decoration-none link'>
                                            <p className='text'>Get Started</p>
                                            <FaArrowRight className='fa' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}