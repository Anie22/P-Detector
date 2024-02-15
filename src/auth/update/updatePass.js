import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from '../../Img/pedxo_2.png'
import '../authCss/update.css'

export const UpdatePass = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayPassword, setDisplayPassword] = useState(false);

    const showPass = () => {
        setDisplayPassword(!displayPassword)
    }

    return (
        <div className="rst-pas-hol">
            <div className="in-rst-pas-hol">
                <div className="sub-rst-pas-hol">
                    <div className="sub-rst-pas-cmp-hol">
                        <div className="in-sub-rst-pas-cmp-hol">
                            <div className="logo">
                                <img className="img-fluid" src={logo} alt=""></img>
                            </div>
                            <div className="form-holder">
                                <h4 className="text-center w-100 mb-3">Change Password</h4>
                                <div className="sub-form-holder">
                                    <form className="row gap-3" method="" action="">
                                        <div className="form-inp-1">
                                            <label>New Password</label>
                                            <input className="form-control" type={displayPassword ? 'text' : 'password'} placeholder={displayPassword ? 'Enter password' : '*********'} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                            <button className="togglebtn" type="button" onClick={showPass}>{displayPassword ? <FaEye/> : <FaEyeSlash/>}</button>
                                        </div>
                                        <div className="form-inp-2">
                                            <label>Confirm Password</label>
                                            <input className="form-control" type={displayPassword ? 'text' : 'password'} placeholder={displayPassword ? 'Enter password' : '*********'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form-button">
                                            <button className="w-100 py-2 rounded-3 text-white" type="submit">Change</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}