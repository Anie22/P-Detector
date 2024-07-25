import React, { useState } from "react"
import '../css/cont.css'
import { FaClock, FaRecycle, FaUser } from "react-icons/fa";
import { Upload } from "./upload";
import { Update } from "./update";

export const Content = () => {
    const [hidden, setHidden] = useState(false)
    const [hideUpdate, setHideUpdate] = useState(false)

    const showUpload = () => {
        setHidden(true)
    }

    const showUpdate = () => {
        setHideUpdate(true)
    }

    return (
        <div className="col-lg-9 col-12 position-absolute end-0 top-0 bottom-0 bg-dark py-5 content">
            <div className="h-100 col-12 py-lg-4 px-lg-5 p-3">
                <div className="d-flex flex-column align-items-start gap-2 col-12">
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between col-12">
                        <div>
                            <h3 className="text-white">Upload Assignment</h3>
                        </div>
                        <div className="btn">
                            <button className="fs-6 rounded-3 upload-btn" onClick={() => showUpload()}>
                                Upload
                            </button>
                        </div>
                    </div>
                    <div className="d-flex align-item-lg-start align-items-center col-12 cont">
                        <div className="fs-lg-5 fs-6 sub-content">
                            <span>You haven't uploaded/posted any assignment yet</span>
                        </div>
                    </div>
                    <div className="overflow-hidden d-flex flex-column rounded-3 col-12 gap-lg-2 gap-3 border p-3">
                        <div className="d-flex flex-column col-12 gap-lg-2 gap-3">
                            <div className="d-flex align-items-center justify-content-between w-100 propos gap-4">
                                <div className="col-7">
                                    <h4 className="text-white text-uppercase fs-5">Project proposal</h4>
                                </div>
                                <div className="position-relative d-flex align-items-center gap-1 sub-indication col-7">
                                    <div>
                                        <FaUser />
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <span>0</span>
                                        <span>Submission</span>
                                    </div>
                                    <div className="position-relative d-flex align-items-center justify-content-center del">
                                        <FaRecycle />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white sub-des-text">kncnjhf hjdhegyghfgygfgb hfgygfhbhjjhgfnh fvfvgvhhfvhjfvghd uhuhejbhvdyg sowihqygy dgfhvfhfguf jjhwiuqio ueujfn vdhguw  nvfhj ewhvn f ne wgvfguvfbjegyuf vnbfhrgew hfguye nvewgyugfuyguygw bf ehgwyhjfbd e nfeygfugufjb vnfehwgbugfuvfbd vjhcfgduejb vfegb fhurgeujb vfehjvfnde dhgeb jfdbeuj desyuagwyhjve fcdvevf jhebw cbfdvyvc de b cd ehgxfyvdghbe dhgcvydeh dc dve dhdvdg dbdhvdhbdhb dd d hdbhbdhdbjhbdbdhbnd dhdhiudnd dbjbdjbjd</p>
                            </div>
                        </div>
                        <div className="d-flex flex-lg-row flex-column align-items-start align-items-lg-center justify-content-lg-between col-12 gap-3 text-white">
                            <div className="dealine">
                                <span className="text-uppercase">Submission Deadline:</span>
                                <p> <FaClock /> Monday, 29th June 2024 by 2:30pm</p>
                            </div>
                            <div className="update-btn-holder">
                                <button className="fs-6 rounded-3 update-btn" onClick={() => showUpdate()}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {hidden && <Upload setHidden={setHidden} />}
                {hideUpdate && <Update setHideUpdate={setHideUpdate} />}
            </div>
        </div>
    )
}