import React from "react"
import '../css/forms.css'

export const Submit = ({setHidden}) => {

    const hideContent = () => {
        setHidden(false)
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12 assign-form-holder">
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2">
                <div className="text-white text-uppercase">
                    <span>submission for assignment 1</span>
                </div>
                <div className="d-flex align-items-center flex-column rounded-3 border col-lg-7 col-12 p-2 assign-inner-form-holder">
                    <div className="col-12 text-end text-white text-uppercase close">
                        <p onClick={() => hideContent()}>cancle</p>
                    </div>
                    <div className="col-12">
                        <form className="p-2" method="post" autoSave="off">
                            <div className="d-flex align-items-start gap-3 flex-column col-12">
                                <div className="d-flex align-items-start gap-3 flex-column col-12">
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Project tile</label>
                                        <input className="form-control" type="text" placeholder="e.g project proposal on tech innovation"></input>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Upload your document</label>
                                        <input className="form-control" type="file" accept="pdf"></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="fs-6 rounded-3 col-12 form-submit-btn" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}