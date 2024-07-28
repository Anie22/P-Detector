import React from "react"
import '../css/forms.css'

export const Update = ({setHideUpdate}) => {

    const hideUpdate = () => {
        setHideUpdate(false)
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12 p-2 form-holder">
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2 p-2 p-lg-0">
                <div className="text-white text-uppercase">
                    <span>update for assignment 1</span>
                </div>
                <div className="d-flex align-items-center flex-column rounded-3 border col-lg-7 col-12 p-2 inner-form-holder">
                    <div className="col-12 text-end text-white text-uppercase close">
                        <p onClick={() => hideUpdate()}>cancle</p>
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
                                        <label className="text-uppercase text-white">Project description</label>
                                        <textarea className="form-control" cols={58} rows={40} placeholder="give a little description of the project"></textarea>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Project deadline</label>
                                        <input className="form-control" type="datetime-local" placeholder="e.g project proposal on tech innovation"></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="fs-6 rounded-3 col-12 form-submit-btn" type="submit">
                                        Update
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