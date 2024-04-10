import React from "react";
// import { useState, useEffect } from "react";
import '../authCss/codever.css'
import { Logo } from '../logo';

export const VerifyCode = () => {
    // const [time, setTime] = useState(60);
    
    // useEffect(() => {
    //     const countdown = setInterval(() => {
    //         if (time > 0) {
    //             setTime(prevTime => prevTime - 1)
    //         }
    //     }, 5000);

    //     return () => clearInterval(countdown);
    // }, [time])

    return (
        <div className="vry-cd-hol">
            <div className="in-vry-cd-hol">
                <Logo />
                <div className="sub-vry-cd-hol">
                    <div className="sub-vry-cd-cmp-hol">
                        <div className="sub">
                            <div className="sub-vry-cd-cmp-hol-head">
                                <h4>Check your email</h4>
                                <h6>We have sent an email with password reset information to n****e@e***e.com.</h6>
                            </div>
                            <div className="sub-vry-cd-cmp-hol-frm-hol">
                                <form method="post" action="/reset-password/update">
                                    <div className="vry-frm-txt-but">
                                        <p>Didn’t receive the email? Check spam or promotion folder or social</p>
                                        <button className="btn" type="submit">
                                            <p>resend email</p>
                                        </button>
                                    </div>
                                    <div className="form-btn w-100">
                                        <a href="/login" className="link">
                                            <button className="btn w-100" type="button">
                                                <p>Back to login</p>
                                            </button>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}