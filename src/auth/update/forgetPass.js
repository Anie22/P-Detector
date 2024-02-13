import Logo from '../../Img/pedxo_2.png';
import '../authCss/frgPass.css'
import { Link } from 'react-router-dom'

export const ResetPass = () => {
    return (
        <div className="frg-pass-hol">
            <div className="sub-frg-pass-hol">
                <div className="in-frg-pass-hol">
                    <div className='in-sub-frg-pass-hol'>
                        <div className='frg-pass-hol-logo'>
                            <img className='img-fluid' src={Logo} alt=''></img>
                        </div>
                        <div className='frg-pass-hol-text row gap-3'>
                            <h2>Reset your password</h2>
                            <p>A code will be sent to your email to enable you reset your password. Enter your email below to receive the code.</p>
                        </div>
                        <div className='frg-pass-hol-form-hol'>
                            <form className='row gap-4' method='' action='reset-password/verify'>
                                <input className='form-control' type='email' placeholder='Enter your email'></input>
                                <div className='frg-pass-hol-form-hol-btn d-flex flex-column-reverse gap-3 text-center'>
                                    <Link to='/'>Cancel</Link>
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}