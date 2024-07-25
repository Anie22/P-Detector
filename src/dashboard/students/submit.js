import React from "react"

export const Submit = ({setHidden}) => {

    const hideContent = () => {
        setHidden(false)
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12" style={{zIndex: '900', height: '100vh', background: 'hsla(255, 40%, 2%, 0.774)'}}>
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2">
                <div className="text-white text-uppercase">
                    <span>submission for assignment 1</span>
                </div>
                <div className="d-flex align-items-center flex-column rounded-3 border col-7 p-2" style={{height: 'fit-content', background: '#010101'}}>
                    <div className="col-12 text-end text-white text-uppercase" style={{fontSize: '12px'}}>
                        <p style={{cursor: 'pointer'}} onClick={() => hideContent()}>cancle</p>
                    </div>
                    <div className="col-12">
                        <form className="p-2" method="post" autoSave="off">
                            <div className="d-flex align-items-start gap-3 flex-column col-12">
                                <div className="d-flex align-items-start gap-3 flex-column col-12">
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white" style={{fontSize: '14px', fontWeight: '500'}}>Project tile</label>
                                        <input className="form-control" type="text" placeholder="e.g project proposal on tech innovation" style={{height: '50px'}}></input>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white" style={{fontSize: '14px', fontWeight: '500'}}>Upload your document</label>
                                        <input className="form-control" type="file" style={{height: '200px'}}></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="fs-6 rounded-3 col-12" type="submit" style={{border: 'none', outline: 'none', background: 'hsl(44, 99%, 63%)', height: '50px', color: 'hsl(218, 13%, 33%)', fontWeight: '500'}}>
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