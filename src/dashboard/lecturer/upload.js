import React from "react"
import '../css/forms.css'
import { useRef, useState } from 'react';
import axiosPrivate from "../../api/axios";

const ASSIGNMENT_URL = '/assignment/upload-assignment'

export const Upload = ({setHidden}) => {
    const nameRef = useRef()
    const describRef = useRef()
    const deadlineRef = useRef()
    const [project_name, setProject_name] = useState('')
    const [project_description, setProject_description] = useState('')
    const [submission_deadline, setSubmission_deadline] = useState('')
    const [error, setError] = useState(null)

    const hideUpload = () => {
        setHidden(false)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setError({...error, [name]: undefined});
        setProject_name(name === 'project_name' ? value: project_name);
        setProject_description(name === 'project_description' ? value: project_description);
        setSubmission_deadline(name === 'submission_deadline' ? value: submission_deadline);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = {};
        const symbols = /[!@#$%^&*]/;

        if(!project_name){
            err.project_name = <p>this field can not be empty</p>

            if(nameRef.current){
                nameRef.focus();
            }
        } else if(symbols.test(project_name)){
            err.project_name = <p>symbols are not allowed</p>

            if(nameRef.current){
                nameRef.focus();
            }
        } else if(!project_description){
            err.project_description = <p>this field can not be empty</p>

            if(describRef.current){
                describRef.focus();
            }
        } else if(symbols.test(project_description)) {
            err.project_description = <p>symbols are not allowed</p>

            if(describRef.current){
                describRef.focus();
            }
        } else if(!submission_deadline){
            err.submission_deadline = <p>you are expected to choose a date</p>

            if(deadlineRef.current){
                deadlineRef.focus();
            }
        } else {
            try {
                const assignment = {
                    project_name,
                    project_description,
                    submission_deadline
                }

                const response = await axiosPrivate.post(ASSIGNMENT_URL, assignment)
                if(response){
                    console.log(response)
                }
            } catch(err) {
                console.error(err)
            }
        }
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12 p-2 form-holder">
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2">
                <div className="d-flex align-items-center flex-column rounded-3 border col-lg-7 col-12 p-2 inner-form-holder">
                    <div className="col-12 text-end text-white text-uppercase close">
                        <p onClick={() => hideUpload()}>cancle</p>
                    </div>
                    <div className="col-12">
                        <form className="p-2" method="post" autoSave="off" onSubmit={(e) => handleSubmit(e)}>
                            <div className="d-flex align-items-start gap-3 flex-column col-12">
                                <div className="d-flex align-items-start gap-3 flex-column col-12">
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Project tile</label>
                                        <input className="form-control" type="text" value={project_name} name="project_name" placeholder="e.g project proposal on tech innovation" ref={nameRef} onChange={(e) => handleChange(e)}></input>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Project description</label>
                                        <textarea className="form-control" cols={58} rows={40} value={project_description} name="project_description" placeholder="give a little description of the project" ref={describRef} onChange={(e) => handleChange(e)}></textarea>
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12">
                                        <label className="text-uppercase text-white">Project deadline</label>
                                        <input className="form-control" type="datetime-local" value={submission_deadline} name="submission_deadline" placeholder="e.g project proposal on tech innovation" ref={deadlineRef} onChange={(e) => handleChange(e)}></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="fs-6 rounded-3 col-12 form-submit-btn" type="submit">
                                        Post
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