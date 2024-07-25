import React from "react"

export const Update = ({setHideUpdate}) => {

    const hideUpdate = () => {
        setHideUpdate(false)
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12" style={{zIndex: '900', height: '100vh', background: 'hsla(255, 40%, 2%, 0.774)'}}>
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2 p-2 p-lg-0">
                <div className="text-white text-uppercase">
                    <span>update for assignment 1</span>
                </div>
                <div className="d-flex align-items-center flex-column rounded-3 border col-lg-7 col-12 p-2" style={{height: 'fit-content', background: '#010101'}}>
                    <div className="col-12 text-end text-white text-uppercase" style={{fontSize: '12px'}}>
                        <p style={{cursor: 'pointer'}} onClick={() => hideUpdate()}>cancle</p>
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
                                        <label className="text-uppercase text-white" style={{fontSize: '14px', fontWeight: '500'}}>Project description</label>
                                        <textarea className="form-control" cols={58} rows={40} placeholder="give a little description of the project" style={{height: '200px', resize: 'none'}}></textarea>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white" style={{fontSize: '14px', fontWeight: '500'}}>Project deadline</label>
                                        <input className="form-control" type="datetime-local" placeholder="e.g project proposal on tech innovation" style={{height: '50px'}}></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="fs-6 rounded-3 col-12" type="submit" style={{border: 'none', outline: 'none', background: 'hsl(44, 99%, 63%)', height: '50px', color: 'hsl(218, 13%, 33%)', fontWeight: '500'}}>
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