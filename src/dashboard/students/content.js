import React, { useState, useEffect } from "react"
import { Submit } from "./submit"
import { FaClock } from "react-icons/fa";
import '../css/content.css'
import { axiosPrivate } from "../../api/axios";

const GIVEN_ASSIGNMENT_URL = 'assignment/assignment-list'

export const Content = () => {
    const [hidden, setHidden] = useState(false);
    const [assign, setAssign] = useState(false);
    const [noAssign, setNoAssign] = useState(true);
    const [givenAssignment, setGivenAssignment] = useState([]);

    const showContent = () => {
        setHidden(true)
    };

    useEffect(() => {
        if(givenAssignment.length === 0){
            setAssign(false)
            setNoAssign(true)
        } else {
            setAssign(true)
            setNoAssign(false)
        }

        const getAssignment = async () => {
            try {
                const res = await axiosPrivate.get(GIVEN_ASSIGNMENT_URL)

                if(res) {
                    const data = res.data
                    setGivenAssignment(data)
                }
            } catch(err){
                console.error(err)
            }
        }

        getAssignment()
    }, [givenAssignment]);

    return (
        <div className="col-12 col-lg-9 position-absolute end-0 top-0 bottom-0 py-5 content">
            <div className="col-12 py-lg-4 px-lg-5 p-3 inner-content">
                <div className="d-flex flex-column align-items-center gap-4 col-12">
                    <div>
                        <h3 className="text-white">Assignment</h3>
                    </div>
                    {noAssign &&    <div className="d-flex align-item-center justify-content-center col-12 content-text">
                                        <div className="text-lg-left text-center fs-lg-5 fs-6">
                                            <span>You haven't been given any assignment yet</span>
                                        </div>
                                    </div>
                    }
                    {givenAssignment.map((giveAssign) => (
                        <div className={assign ? "d-flex flex-column rounded-3 col-12 gap-2 border p-3" : "d-none"}>
                            <div className="d-flex flex-column col-12 gap-2">
                                <div>
                                    <h4 className="text-white text-uppercase fs-5">{giveAssign.project_name}</h4>
                                </div>
                                <div>
                                    <p className="text-white sub-des-text">{giveAssign.project_description}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between col-12 text-white">
                                <div className="assign-indication">
                                    <span className="text-uppercase">Submission Deadline:</span> 
                                    <p> <FaClock /> Monday, 29th June 2024 by 2:30pm</p>
                                </div>
                                <div>
                                    <button className="fs-6 rounded-3 submit-btn" onclick={() => showContent()}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {hidden && <Submit setHidden={setHidden} />}
        </div>
    )
}