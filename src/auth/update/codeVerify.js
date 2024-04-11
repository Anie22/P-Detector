import React from "react";
import { useState, useEffect } from "react";
import '../authCss/codever.css'
import { Logo } from '../logo';

export const VerifyCode = () => {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const getEmail = () => {
            const mail = localStorage.getItem('mail');
            const mailIndex = [7, 8, 9, 10, 11, 12]
            const email = mail.replace(/./g, (char, index) => mailIndex.includes(index) ? '*' : char)
            setEmail(email);
        };

        getEmail();
    }, [email])

    return (
        <div className="vry-cd-hol">
            <div className="in-vry-cd-hol">
                <Logo />
                <div className="sub-vry-cd-hol">
                    <div className="sub-vry-cd-cmp-hol">
                        <div className="sub">
                            <div className="sub-vry-cd-cmp-hol-head">
                                <h4>Check your email</h4>
                                <h6>We have sent an email with password reset information to <span>{email}</span></h6>
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