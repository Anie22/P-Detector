import React from "react";
import './css/success.css';

export const Success = ({message, icon}) => {
    return (
        <div className="success-holder">
            <div className="sub-holder">
                {icon}
                <div className="success-text-holder">
                    <p className="text">{message}</p>
                </div>
            </div>
        </div>
    )
}