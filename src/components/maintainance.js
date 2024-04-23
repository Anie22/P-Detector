import MaintainanceIMG from '../Img/Computer troubleshooting-amico.svg';
import './css/maintainance.css';

export const Maintainance = () => {
    return (
        <div className="text-center h3 text-capitalize d-flex justify-content-center py-4 w-100 maintainance-holder">
            <div className='d-flex justify-content-center flex-column gap-5 px-3 sub-holder py-2 w-100'>
                <div className='w-50'>
                    <img className='img-fluid' src={MaintainanceIMG} alt='It is undergoing updates'></img>
                </div>
                <div className='w-100 text'>
                    <p>We are undergoing maintainance on this page. <br /> It will be restored back once the update is over.</p>
                </div>
                <a href='/' className='link d-flex justify-content-center'>
                    <p>Back to homepage</p>
                </a>
            </div>
        </div>
    )
};