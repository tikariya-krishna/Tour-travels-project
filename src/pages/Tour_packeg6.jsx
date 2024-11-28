import './css/Tour_packeg.css'
import sideImage from '../pages/image/gujrat.jpg'
function Tour_packeg6(){
    return(
        <>
            {/* <div className="col">
                <div className="row-8">
                    <div className='detail'>
                        <p>Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='booking'>
                        <p>Price:- $230</p>
                        <button>Buy</button>
                    </div>
                </div>

                <div className="row-4">
                            <img src={react}/>
                </div>
            </div> */}


<div className="filtersearch-packages text-white">
                <div className="row no-gutters">
                    <div className="col-12 col-md-3 m-0 text-center">
                        <div className="left-searchpack">
                            <img src={sideImage} className='under-img rounded' width={"306px"} height={"256px"}/>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-7">
                        <div className="mid-searchpack">
                            <h5>AWESOME GIR WATERFALL WITH 04 STAR ACCOMMODATION-LONG WEEKEND SPECIAL EX SURAT</h5>
                            <div className="tour-packages-list-wrap d-flex justify-content-between">
                                <div>
                                    <div className="packages-list-wrap">
                                        <strong>Duration:</strong>
                                        <span> 1 Nights/2 Days</span>
                                    </div>
                                    
                                    <div className="packages-list-wrap">
                                        <strong>Package Code:</strong>
                                        <span> NLO14 </span>
                                    </div>
                                    
                                    <div className="packages-list-wrap">
                                        <strong>Origin:</strong>
                                        <span> SURAT</span>
                                    </div>
                                
                                </div>

                                <div>
                                    <div className="packages-list-wrap">
                                        <strong>Destination:</strong>
                                        <span> GIR WATERFALL</span>
                                    </div>
                                    
                                    <div className="packages-list-wrap">
                                        <strong>Departure:</strong>
                                        <span> 11.07.2023 </span>
                                    </div>
                                    
                                    <div className="packages-list-wrap">
                                        <strong>Upcoming Date Of Journey:</strong>
                                        <span> 11.07.2024 </span>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="tour-packages-amenities pt-4">
                                <app-inclusions>
                                <ul className='d-flex '>
                                        <li className='pe-3'><strong> Inclusions: </strong></li>
                                        {/* <li className='pe-3'>
                                            <img alt="Air-Tickets" src="assets/img/Air-ticket.png"/>
                                            <span className="d-none d-md-inline-block">Air</span>
                                        </li> */}
                                        
                                        <li className='pe-3'>
                                            {/* <img alt=" Road Transport" src="assets/img/bus-transport.png"/> */}
                                            <span className="d-none d-md-inline-block">Bus</span>
                                        </li>
                                        
                                        <li className='pe-3'>
                                            {/* <img alt="Hotel" src="assets/img/hotel.png"/> */}
                                            <span className="d-none d-md-inline-block">Hotel</span>
                                        </li>
                                        
                                        <li className='pe-3'>
                                            {/* <img alt="Meal" src="assets/img/meal.png"/> */}
                                            <span className="d-none d-md-inline-block">Meal</span>
                                        </li>
                                        
                                        <li className='pe-3'>
                                            {/* <img alt="Insurance" src="assets/img/travel-insuranse.png"/> */}
                                            <span className="d-none d-md-inline-block">Insurance</span>
                                        </li>
                                    
                                    </ul>
                                    </app-inclusions>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-2">
                        <div className="right-searchpack text-center">
                            <label className='mb-2'>Starting from </label><br/>
                            <strong>₹ 15000 </strong>
                            <div className='mt-3'>   <a href="#">View Details</a> </div>
                            
                            <div className="clearfix"></div>
                            <a className="btn btn-radius-none btn-yellow mt-2 book-btn" href="#">Book Now </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tour_packeg6;