import React from "react"
import '../css/forms.css'
import { useRef, useState } from 'react';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import {axiosPrivate} from "../../api/axios";

const ASSIGNMENT_URL = 'assignment/upload-assignment'

export const Upload = ({setHidden}) => {
    const nameRef = useRef();
    const describRef = useRef();
    const deadlineRef = useRef();
    const [project_name, setProject_name] = useState('');
    const [project_description, setProject_description] = useState('');
    const [submission_deadline, setSubmission_deadline] = useState('');
    const [error, setError] = useState({});
    const [showloder, setShowloder] = useState(false);
    const [showmodel, setShowModel] = useState(false);
    const [message, setMessage] = useState(null);
    const [icon, setIcon] = useState(null);


    const hideUpload = () => {
        setHidden(false)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setError({ ...error, [name]: undefined});
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
                nameRef.current.focus();
            }
        } else if(symbols.test(project_name)){
            err.project_name = <p>symbols are not allowed</p>

            if(nameRef.current){
                nameRef.current.focus();
            }
        } else if(!project_description){
            err.project_description = <p>this field can not be empty</p>

            if(describRef.current){
                describRef.current.focus();
            }
        } else if(symbols.test(project_description)) {
            err.project_description = <p>symbols are not allowed</p>

            if(describRef.current){
                describRef.current.focus();
            }
        } else if(!submission_deadline){
            err.submission_deadline = <p>you are expected to choose a date</p>

            if(deadlineRef.current){
                deadlineRef.current.focus();
            }
        } else {
            try {
                setShowloder(true)
                const assignment = {
                    project_name,
                    project_description,
                    submission_deadline
                }
                console.log(assignment)

                const response = await axiosPrivate.post(ASSIGNMENT_URL, assignment)
                if(response){
                    setShowModel(true)
                    setMessage('Asignment Posted')
                    setIcon(
                        <div className="success">
                            <svg xmlns="http://www.w3.org/2000/svg" className='fa' viewBox="0 0 100 101" fill="none">
                                <path d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    )
                    setHidden(false)
                    console.log(response)
                }
            } catch(err) {
                if(err){
                    setIcon(
                        <div className="error">
                            <svg className="fa" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    );

                    if(err.response){
                        const { status } = err.response
    
                        if(status === 403 && err.response.data.detail === 'User email is not verified'){
                            setMessage("User email is not verified")
                        } else if(status === 403 && err.response.data.detail === 'User does not exist'){
                            setMessage("User does not exist")
                        } else if(status === 403 && err.response.data.detail === 'wrong password'){
                            setMessage("wrong password")
                        } else if(status === 500){
                            setMessage("Server Error")
                        }
                    }

                    if(err.message === "Network Error"){
                        setMessage("Network Error")
                    }
                }
                console.error(err)
            } finally{
                setShowloder(false)
            }
        }

        if (Object.keys(err).length > 0) {
            setError(err);
            return;
        };
    }

    return (
        <div className="position-absolute top-0 bottom-0 end-0 col-12 p-2 assign-form-holder">
            <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-2">
                <div className="d-flex align-items-center flex-column rounded-3 border col-lg-7 col-12 p-2 assign-inner-form-holder">
                    <div className="col-12 text-end text-white text-uppercase close">
                        <p onClick={() => hideUpload()}>cancle</p>
                    </div>
                    <div className="col-12">
                        <form className="p-2" method="post" autoSave="off" onSubmit={(e) => handleSubmit(e)}>
                            <div className="d-flex align-items-start gap-3 flex-column col-12">
                                <div className="d-flex align-items-start gap-3 flex-column col-12">
                                    <div className="d-flex flex-column gap-2 col-12 assign">
                                        <label className="text-uppercase text-white">Project tile</label>
                                        <input className="form-control" type="text" value={project_name} name="project_name" placeholder="e.g project proposal on tech innovation" ref={nameRef} onChange={(e) => handleChange(e)}></input>
                                        {error.project_name}
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12 assign">
                                        <label className="text-uppercase text-white">Project description</label>
                                        <textarea className="form-control" cols={58} rows={40} value={project_description} name="project_description" placeholder="give a little description of the project" ref={describRef} onChange={(e) => handleChange(e)}></textarea>
                                        {error.project_description}
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-12 assign">
                                        <label className="text-uppercase text-white">Project deadline</label>
                                        <input className="form-control" type="datetime-local" value={submission_deadline} name="submission_deadline" placeholder="e.g project proposal on tech innovation" ref={deadlineRef} onChange={(e) => handleChange(e)}></input>
                                        {error.submission_deadline}
                                    </div>
                                </div>
                                <div className="col-12">
                                    {showloder ? <Loader /> : <button className="fs-6 rounded-3 col-12 form-submit-btn" type="submit">
                                        Post
                                    </button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {showmodel && <Modal message={message} icon={icon} />}
            </div>
        </div>
    )
}