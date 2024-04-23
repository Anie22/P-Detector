import Oops from  '../Img/404 error with a tired person-bro.svg';
import './css/error.css'

export const Missing = () => {
    return (
        <div className="text-center h3 text-capitalize d-flex justify-content-center py-4 w-100 Oops-holder">
            <div className='d-flex justify-content-center flex-column gap-5 px-3 sub-holder py-2 w-100'>
                <div className='w-75'>
                    <img className='img-fluid' src={Oops} alt='It is undergoing updates'></img>
                </div>
                <div className='w-100 text'>
                    <p>page not found.</p>
                </div>
                <a href='/' className='link d-flex justify-content-center'>
                    <p>Back to homepage</p>
                </a>
            </div>
        </div>
    )
}