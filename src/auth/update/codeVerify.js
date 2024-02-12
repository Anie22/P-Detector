import React from "react";

export const VerifyCode = () => {
    return (
        <div className="vry-cd-hol">
            <div className="in-vry-cd-hol">
                <div className="sub-vry-cd-hol">
                    <div className="sub-vry-cd-cmp-hol">
                        <div>
                            <h4>We have send a verification code to your email address, kindly enter the code below to change your code.</h4>
                        </div>
                        <div>
                            <form method="" action="reset-password/update">
                                <div>
                                    <p>code expires in 60s</p>
                                    <input type="text" placeholder="Enter code"></input>
                                </div>
                                <div>
                                    <p>Didn't get a code <button type="submit">resend code</button></p>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}