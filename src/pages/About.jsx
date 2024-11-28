import "./css/about.css"
import firstImg from '../pages/image/sunset.jpg'
import secondImg from '../pages/image/south-india.jpg'
import threeImg from '../pages/image/india.jpg'
export default function About(){
    return(
        <>
            <div className="bg-img">
                <h1 className="fw-bold text-center pt-5 text-decoration-underline">About-US</h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <h3>At MF Advantures we provide business and leisure travelers with expert advice and tour service.</h3>
                    </div>
                    <div className="col-4">
                        <p>We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.
                        We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.</p>
                        <p>We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.</p>
                    </div>
                    <div className="col-4">
                        <p>We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.
                        We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.
                        We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.</p>
                        <p>We offer a variety of travel and tour services in Zanzibar & Tanzania as a whole.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 containt-img">
                        <img src={firstImg} className='under-img rounded w-100 image'/>
                        <div className="overlay">
                            <div className="text">SUNSET</div>
                        </div>
                    </div>
                    <div className="col-4 containt-img">
                        <img src={secondImg} className='under-img rounded w-100 image'/>
                        <div className="overlay">
                            <div className="text">FOREST</div>
                        </div>
                    </div>
                    <div className="col-4 containt-img">
                        <img src={threeImg} className='under-img rounded w-100 image'/>
                        <div className="overlay">
                            <div className="text">BEATCH</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}