import { useState, useEffect } from "react"
import '../css/dashboard.css'
import { Header } from "../../components/header"
// import { Submitted } from "./submitted"
import { Profile } from "./profile"
import { Settings } from "./settings"
import { Content } from "./content"

export const LecturerDashboard = () => {
    const navLinks = ['Dashboard', 'Review Submission', 'Profile', 'Settings', 'Logout']
    const [select, setSelect] = useState(0)

    const RenderComp = ({index}) => {
        switch (index) {
            case 0: return <Content />
            // case 1: return <Submitted />
            case 2: return <Profile />
            case 3: return <Settings />
            default:
                break;
        }
    }

    useEffect(() => {
        document.title = 'P-Detector Lecturer Dashboard'
    }, [])

    return (
        <div className="d-flex justify-content-between align-items-center position-relative bg-dark col-12 dashboard">
            <Header navLinks={navLinks} select={select} setSelect={setSelect} />
            <RenderComp index={select} />
        </div>
    )
}