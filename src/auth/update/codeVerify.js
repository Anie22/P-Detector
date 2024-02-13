import React from "react";
import '../authCss/codever.css'

export const VerifyCode = () => {
    return (
        <div className="vry-cd-hol">
            <div className="in-vry-cd-hol">
                <div className="sub-vry-cd-hol">
                    <div className="sub-vry-cd-cmp-hol">
                        <div className="sub-vry-cd-cmp-hol-head">
                            <h4>We have send a verification code to your email address, kindly enter the code below to verify.</h4>
                        </div>
                        <div className="sub-vry-cd-cmp-hol-frm-hol">
                            <form method="" action="reset-password/update">
                                <div className="vry-frm-txt">
                                    <p>code expires in 60s</p>
                                    <input className="form-control" type="text" placeholder="Enter code"></input>
                                </div>
                                <div className="form-btn-hol">
                                    <p className="dnt">Didn't get a code, <button className="btn-1" type="submit">resend code</button></p>
                                    <button className="btn-2 py-2 text-white rounded-2 w-100" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}