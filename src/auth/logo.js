import React from "react";
import '../auth/authCss/logo.css'

export const Logo = () => {
    return (
        <div className='Logo-content-holder'>
            <div className='logo-content d-flex justify-content-between'>
                <div className='logo'>
                    <h3 className="link">
                        <a href="/">Pedxo</a>
                    </h3>
                </div>
                <div className='content'>
                    <h2>Your <span>startup's technical</span> department.</h2>
                </div>
            </div>
        </div>
    )
}