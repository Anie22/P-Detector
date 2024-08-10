import React, { useEffect, useState } from "react"
import '../css/cont.css'
import { FaClock, FaRecycle, FaUser } from "react-icons/fa";
import { Upload } from "./upload";
import { Update } from "./update";
import { axiosPrivate } from "../../api/axios";

const AssignmentList_URL = 'assignment/lecturers_assignment-list'
const TotalSubmissions_URL = 'assignment/lecturer-student-submission-view'

export const Content = () => {
    const [hidden, setHidden] = useState(false);
    const [hideUpdate, setHideUpdate] = useState(false);
    const [notUpload, setNotUpload] = useState(true);
    const [uploaded, setUploaded] = useState(false);
    const [assignment, setAssignment] = useState([]);
    const [submission, setSubmission] = useState('')
    const [assign_name, setAssign_Name] = useState('');
    const [sub_name, setSub_Name] = useState('')
    const [count, setCount] = useState(0);

    const showUpload = () => {
        setHidden(true)
    }

    const showUpdate = () => {
        setHideUpdate(true)
    }

    useEffect(() => {

        if(assignment.length !== 0){
            setUploaded(true)
            setNotUpload(false)
        } else {
            setUploaded(false)
            setNotUpload(true)
        }

        if(count > 1){
            setSubmission('Submissions')
        } else {
            setSubmission('Submission')
        }

        const getAssignment = async () => {
            try {
                const res = await axiosPrivate.get(AssignmentList_URL)
                if(res) {
                    setAssign_Name(res.data.id)
                    setAssignment(res.data)
                }
            } catch(err) {
                console.error(err)
            }
        }

        getAssignment()

        const getNumberOfSubmission = async () => {
            try{
                const response = await axiosPrivate.get(TotalSubmissions_URL)

                if(response){
                    setSub_Name(response.data.assignment)

                    if(sub_name === assign_name){
                        setCount(sub_name.length)
                    } else{
                        setCount(0)
                    }
                }
            } catch(err) {
                console.error(err)
            }
        }

        getNumberOfSubmission()
    }, [notUpload, uploaded, assignment, count, assign_name, sub_name])

    return (
        <div className="col-lg-9 col-12 position-absolute end-0 top-0 bottom-0 bg-dark py-5 content">
            <div className="h-100 col-12 py-lg-4 px-lg-5 p-3 sub-content-holder">
                <div className="d-flex flex-column align-items-lg-start align-items-center gap-3 col-12">
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between col-12">
                        <div className="text-lg-start text-center">
                            <h3 className="text-white">Upload Assignment</h3>
                        </div>
                        <div className="btn">
                            <button className="fs-6 rounded-3 upload-btn" onClick={() => showUpload()}>
                                Upload
                            </button>
                        </div>
                    </div>
                    {notUpload && <div className="d-flex align-item-lg-start align-items-center col-12 cont">
                        <div className="col-12 fs-lg-5 fs-6 sub-content text-lg-left text-center">
                            <span>You haven't uploaded/posted any assignment yet</span>
                        </div>
                    </div>}
                    {assignment.map((assign) => (
                        <div className={uploaded ? "overflow-hidden d-flex flex-column rounded-3 col-12 gap-lg-2 gap-3 border p-3" : "d-none"}>
                            <div className="d-flex flex-column col-12 gap-lg-2 gap-3">
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <div className="col-5">
                                        <h4 className="text-white text-uppercase fs-lg-5 fs-6">{assign.project_name}</h4>
                                    </div>
                                    <div className="position-relative d-flex align-items-center gap-1 sub-indication">
                                        <div>
                                            <FaUser />
                                        </div>
                                        <div className="d-flex align-items-center gap-1 propos">
                                            <span>{count}</span>
                                            <span>{submission}</span>
                                        </div>
                                        <div className="position-relative d-flex align-items-center justify-content-center del">
                                            <FaRecycle />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white sub-des-text">{assign.project_description}</p>
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
                    ))}
                </div>
                {hidden && <Upload setHidden={setHidden} />}
                {hideUpdate && <Update setHideUpdate={setHideUpdate} />}
            </div>
        </div>
    )
}