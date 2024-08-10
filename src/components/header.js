import React from "react";
import './css/header.css';
import { AutoYear } from "./date";
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/auth';
import { axiosPrivate } from '../api/axios';

const PROFILE_URL = 'user-profile';

export const Header = ({navLinks, select, setSelect}) => {
    const { data, setData } = useAuth();
    const [nav, setNav] = useState(false);
    const [menu, setMenu] = useState(null);
    const [mobileLogo, setMobileLogo] = useState(null);

    const showNav = () => {
        setNav(true);
    };

    const closeNav = () => {
        setNav(false);
    };

    useEffect(() => {
        const getProfile = async () => {
            try{
                const res = await axiosPrivate.get(PROFILE_URL)

                if(res){
                    const roles = res.data[0].user.roles
                    const userImage = res.data[0].pic
                    const user = res.data[0].user.firstName
                    setData({ roles, userImage, user })
                }
            } catch(err) {
                console.error(err)
            }
        }

        getProfile()
    }, [ setData ]);
    useEffect(() => {

        const addMenu = () => {
            if(window.innerWidth > 992) {
                setMenu(null);
                return
            } else {
                setMenu(
                    <div className='d-flex align-items-start flex-column justify-content-end ms-3 toggle-bar' onClick={() => showNav()}>
                        <div className='bar'></div>
                        <div className='bar bar-2'></div>
                        <div className='bar bar-3'></div>
                    </div>
                );
                setMobileLogo(
                    <div className="d-flex align-items-center ms-3 inner-logo">
                        <div onClick={() => closeNav()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 18 18" fill="none">
                                <path d="M0.494492 0.494492C0.651027 0.337733 0.83693 0.213373 1.04157 0.128524C1.24621 0.0436741 1.46557 0 1.6871 0C1.90863 0 2.12799 0.0436741 2.33263 0.128524C2.53727 0.213373 2.72317 0.337733 2.8797 0.494492L9.00025 6.61279L15.1208 0.494492C15.2774 0.337876 15.4633 0.213642 15.668 0.128882C15.8726 0.0441229 16.0919 0.000497867 16.3134 0.000497862C16.5349 0.000497858 16.7542 0.0441229 16.9588 0.128882C17.1635 0.213642 17.3494 0.337876 17.506 0.494492C17.6626 0.651107 17.7869 0.837036 17.8716 1.04166C17.9564 1.24629 18 1.46561 18 1.6871C18 1.90859 17.9564 2.1279 17.8716 2.33253C17.7869 2.53716 17.6626 2.72309 17.506 2.8797L11.3877 9.00025L17.506 15.1208C17.8223 15.4371 18 15.8661 18 16.3134C18 16.7607 17.8223 17.1897 17.506 17.506C17.1897 17.8223 16.7607 18 16.3134 18C15.8661 18 15.4371 17.8223 15.1208 17.506L9.00025 11.3877L2.8797 17.506C2.5634 17.8223 2.13441 18 1.6871 18C1.23978 18 0.81079 17.8223 0.494492 17.506C0.178193 17.1897 0.000497862 16.7607 0.000497862 16.3134C0.000497862 15.8661 0.178193 15.4371 0.494492 15.1208L6.61279 9.00025L0.494492 2.8797C0.337733 2.72317 0.213373 2.53727 0.128524 2.33263C0.0436741 2.12799 0 1.90863 0 1.6871C0 1.46557 0.0436741 1.24621 0.128524 1.04157C0.213373 0.83693 0.337733 0.651027 0.494492 0.494492Z" fill="#F0F1F3"/>
                            </svg>
                        </div>
                    </div>
                );
            }
        };

        addMenu();
        window.addEventListener('resize', addMenu);

        return () => {
            window.removeEventListener('resize', addMenu);
        }
    }, [])

    return (
        <div className={nav ? "position-fixed d-flex align-items-start col-12 col-lg-9 top-0 bottom-0 header--holder" : "position-fixed d-flex align-items-start col-12 col-lg-9 top-0 bottom-0 header--holder header--holder2"}>
            <div className="overflow-hidden col-12 col-lg-4 py-lg-5 py-2 px-2 inner-header">
                <div className="d-flex align-itenms-center flex-column justify-content-center gap-lg-4 gap-5 main-header">
                    <div className="col-12 d-flex flex-row align-items-center justify-content-between justify-content-lg-center header-logo">
                        { nav ? mobileLogo : menu}
                        <div className="d-flex flex-lg-column flex-row-reverse align-items-center justify-content-lg-center justify-content-start p-1 gap-2 logo">
                            <div className="rounded-circle overflow-hidden bg-white image-holder">
                                <img className="img-fluid rounded-circle" src={data.userImage} alt="" />
                            </div>
                            <div className="text">
                                <p className="fs-lg-5 fs-6"><span className="fs-lg-4 fs-6">Good Morning</span> {data.user}</p>
                            </div>
                        </div>
                    </div>
                    <div className={nav ? "header-content open" : "header-content"}>
                        <div className="col-12 content">
                            {navLinks.map((nav, index) => (
                                <ul className="nav nav-links align-items-center flex-column text-center gap-4 text-white">
                                    <li className={select === index ? "p-3 fs-5 rounded-3 active" : "p-3 fs-5 rounded-3"} onClick={() => setSelect(index)}>{nav}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center justify-content-center text-center shadow autoDate">
                    <AutoYear />
                </div>
            </div>
        </div>
    )
}