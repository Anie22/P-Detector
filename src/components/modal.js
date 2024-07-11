import React from "react";
import './css/modal.css';

export const Modal = ({message, icon}) => {
    return (
        <div className="position-fixed d-flex flex-column align-items-end justify-content-right gap-4 top-0 bottom-0 end-0 w-100 success-holder">
            <div className="d-flex flex-row-reverse align-items-center justify-content-end px-4 gap-4 sub-holder">
                {icon}
                <div className="success-text-holder">
                    <p className="text">{message}</p>
                </div>
            </div>
        </div>
    )
}