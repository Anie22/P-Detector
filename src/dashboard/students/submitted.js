import React, { useState, useEffect } from "react";
import '../css/submitted.css'
import { FaClock } from "react-icons/fa";

export const Submitted = () => {
    const [sub, setSub] = useState(false);
    const [notSub, setNoSub] = useState(true);

    useEffect(() => {
        setSub(false);
        setNoSub(true);
    }, [])

    return (
        <div className="col-9 position-absolute end-0 top-0 py-5 submit">
            <div className="col-12 py-lg-4 px-lg-5 p-3 inner-sub">
                {notSub && <div className="d-flex align-item-center justify-content-center col-12" style={{height: '100%'}}>
                                <div className="fs-5" style={{color: 'hsl(218, 15%, 65%)'}}>
                                    <span>You haven't been given any assignment yet or haven't submitted any assignment</span>
                                </div>
                            </div>
                }
                {sub && <div className="d-flex flex-row justify-content-between rounded-3 col-12 gap-2 border p-3">
                            <div className="d-flex flex-column col-6 gap-2">
                                <div className="d-flex align-items-center col-12 gap-2">
                                    <h4 className="text-white text-uppercase fs-6">Assignment 1</h4>
                                </div>
                                <div className="d-flex align-items-center justify-content-between col-12 text-white">
                                    <div className="sub-submit">
                                        <span className="text-uppercase">Submitted On:</span>
                                        <p> <FaClock /> Monday, 29th June 2024 by 2:30pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end col-6 px-2">
                                <div className="re-sub">
                                    <span>Pending</span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}