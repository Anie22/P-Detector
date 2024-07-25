import React from "react";
import './css/header.css';
import { AutoYear } from "./date";
import user from '../../src/Img/user.png'

export const Header = ({navLinks, select, setSelect}) => {
    // const [scroll, setScroll] = useState(false);
    // const [nav, setNav] = useState(false);
    // const [menu, setMenu] = useState(null);
    // const [mobileLogo, setMobileLogo] = useState(null);

    // const showNav = () => {
    //     setNav(true);
    //     document.body.style.overflow = 'hidden'
    // };

    // const closeNav = () => {
    //     setNav(false);
    //     document.body.style.overflow = 'auto';
    // };

    // const toggleServices = () => {
    //     setOpenService(!openServices)
    // };

    // useEffect(() => {

    //     const addMenu = () => {
    //         if(window.innerWidth > 992) {
    //             setMenu(null);
    //             setMobileLogo(null);
    //             setHomeLink(null);
    //             return
    //         } else {
    //             setMenu(
    //                 <div className='d-flex align-items-start flex-column justify-content-left toggle-bar' onClick={() => showNav()}>
    //                     <div className='bar'></div>
    //                     <div className='bar bar-2'></div>
    //                     <div className='bar bar-3'></div>
    //                 </div>
    //             );
    //             setMobileLogo(
    //                 <div className="d-flex align-items-center col-12 justify-content-between inner-logo">
    //                     <div className="lgo">
    //                         <h4>Pedxo</h4>
    //                     </div>
    //                     <div onClick={() => closeNav()}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 18 18" fill="none">
    //                             <path d="M0.494492 0.494492C0.651027 0.337733 0.83693 0.213373 1.04157 0.128524C1.24621 0.0436741 1.46557 0 1.6871 0C1.90863 0 2.12799 0.0436741 2.33263 0.128524C2.53727 0.213373 2.72317 0.337733 2.8797 0.494492L9.00025 6.61279L15.1208 0.494492C15.2774 0.337876 15.4633 0.213642 15.668 0.128882C15.8726 0.0441229 16.0919 0.000497867 16.3134 0.000497862C16.5349 0.000497858 16.7542 0.0441229 16.9588 0.128882C17.1635 0.213642 17.3494 0.337876 17.506 0.494492C17.6626 0.651107 17.7869 0.837036 17.8716 1.04166C17.9564 1.24629 18 1.46561 18 1.6871C18 1.90859 17.9564 2.1279 17.8716 2.33253C17.7869 2.53716 17.6626 2.72309 17.506 2.8797L11.3877 9.00025L17.506 15.1208C17.8223 15.4371 18 15.8661 18 16.3134C18 16.7607 17.8223 17.1897 17.506 17.506C17.1897 17.8223 16.7607 18 16.3134 18C15.8661 18 15.4371 17.8223 15.1208 17.506L9.00025 11.3877L2.8797 17.506C2.5634 17.8223 2.13441 18 1.6871 18C1.23978 18 0.81079 17.8223 0.494492 17.506C0.178193 17.1897 0.000497862 16.7607 0.000497862 16.3134C0.000497862 15.8661 0.178193 15.4371 0.494492 15.1208L6.61279 9.00025L0.494492 2.8797C0.337733 2.72317 0.213373 2.53727 0.128524 2.33263C0.0436741 2.12799 0 1.90863 0 1.6871C0 1.46557 0.0436741 1.24621 0.128524 1.04157C0.213373 0.83693 0.337733 0.651027 0.494492 0.494492Z" fill="#F0F1F3"/>
    //                         </svg>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //     };

    //     addMenu();
    //     window.addEventListener('resize', addMenu);

    //     return () => {
    //         window.removeEventListener('resize', addMenu);
    //     }
    // }, [])

    return (
        <div className="position-fixed d-flex d-none align-items-start col-9 top-0 bottom-0 header--holder">
            <div className="overflow-hidden col-4 h-100 py-5 px-2 inner-header">
                <div className="d-flex align-itenms-center flex-column justify-content-center gap-4 main-header">
                    <div className="header-logo">
                        <div className="col-12 d-flex flex-column align-items-center justify-content-center p-1 gap-2 logo">
                            <div className="rounded-circle overflow-hidden bg-white image-holder">
                                <img className="img-fluid rounded-circle" src={user} alt="" />
                            </div>
                            <div className="text">
                                <p className="fs-5"><span className="fs-4">Good Morning</span> Aniebiet</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-content">
                        <div className="col-12 content">
                            {navLinks.map((nav, index) => (
                                <ul className="nav nav-links align-items-center flex-column text-center gap-4 text-white">
                                    <li className={select === index ? "p-3 fs-5 rounded-3 active" : "p-3 fs-5 rounded-3"} onClick={() => setSelect(index)}>{nav}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center text-center shadow autoDate">
                    <AutoYear />
                </div>
            </div>
        </div>
    )
}