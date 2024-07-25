import React, { useState, useEffect } from "react"
import { Submit } from "./submit"
import { FaClock } from "react-icons/fa";

export const Content = () => {
    const [hidden, setHidden] = useState(false);
    const [assign, setAssign] = useState(false);
    const [noAssign, setNoAssign] = useState(true);

    const showContent = () => {
        setHidden(true)
    };

    useEffect(() => {
        setAssign(false);
        setNoAssign(true)
    }, []);

    return (
        <div className="col-9 position-absolute end-0 top-0">
            <div className="col-12 py-lg-4 px-lg-5 p-3" style={{height: '100%'}}>
                <div className="d-flex flex-column align-items-center gap-4 col-12">
                    <div>
                        <h3 className="text-white">Assignment</h3>
                    </div>
                    {noAssign &&    <div className="d-flex align-item-center justify-content-center col-12" style={{height: '100%'}}>
                                        <div className="fs-5" style={{color: 'hsl(218, 15%, 65%)'}}>
                                            <span>You haven't been given any assignment yet</span>
                                        </div>
                                    </div>
                    }
                    {assign &&  <div className="d-flex flex-column rounded-3 col-12 gap-2 border p-3">
                                    <div className="d-flex flex-column col-12 gap-2">
                                        <div>
                                            <h4 className="text-white text-uppercase fs-5">Project proposal</h4>
                                        </div>
                                        <div>
                                            <p className="text-white" style={{width: '100%', fontSize: '14px'}}>kncnjhf hjdhegyghfgygfgb hfgygfhbhjjhgfnh fvfvgvhhfvhjfvghd uhuhejbhvdyg sowihqygy dgfhvfhfguf jjhwiuqio ueujfn vdhguw  nvfhj ewhvn f ne wgvfguvfbjegyuf vnbfhrgew hfguye nvewgyugfuyguygw bf ehgwyhjfbd e nfeygfugufjb vnfehwgbugfuvfbd vjhcfgduejb vfegb fhurgeujb vfehjvfnde dhgeb jfdbeuj desyuagwyhjve fcdvevf jhebw cbfdvyvc de b cd ehgxfyvdghbe dhgcvydeh dc dve dhdvdg dbdhvdhbdhb dd d hdbhbdhdbjhbdbdhbnd dhdhiudnd dbjbdjbjd</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between col-12 text-white">
                                        <div style={{fontSize: '12px', color: 'hsl(218, 15%, 65%)'}}>
                                            <span className="text-uppercase">Submission Deadline:</span> 
                                            <p> <FaClock /> Monday, 29th June 2024 by 2:30pm</p>
                                        </div>
                                        <div>
                                            <button className="fs-6 rounded-3 " style={{border: 'none', outline: 'none', background: 'hsl(44, 99%, 63%)', width: '150px', height: '50px', color: 'hsl(218, 13%, 33%)', fontWeight: '500'}} onClick={() => showContent()}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                    }
                </div>
            </div>
            {hidden && <Submit setHidden={setHidden} />}
        </div>
    )
}