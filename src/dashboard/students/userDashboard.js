import { useState, useEffect } from "react"
import { Header } from "../../components/header"
import { Content } from "./content"
import { Submitted } from "./submitted"
import { Profile } from "./profile"
import { Settings } from "./settings"

export const UserDashboard = () => {
    const navLinks = ['Dashboard', 'Submitted', 'Profile', 'Settings', 'Logout']
    const [select, setSelect] = useState(0)

    const RenderComp = ({index}) => {
        switch (index) {
            case 0: return <Content />
            case 1: return <Submitted />    
            case 2: return <Profile />
            case 3: return <Settings />
            default:
                break;
        }
    }

    useEffect(() => {
        document.title = 'P-Detector Student Dashboard'
    }, [])

    return (
        <div className="d-flex justify-content-between align-items-center position-relative">
            <Header navLinks={navLinks} select={select} setSelect={setSelect} />
            <RenderComp index={select} />
        </div>
    )
}