import mumbai from './image/mumbai.jpg'
import mountain from './image/moutain.jpg'
import south_india from './image/south-india.jpg'
import ladakh from './image/ladakh.jpg'
import './css/Home.css'
import { NavLink } from 'react-router-dom'
export default function Home(){
    return(
        <>

          {/* This is our front containt */}

          <div className='front-containt w-100 h-100'>
              <div className=''>
                <div className='front-img position-relative'>
                  <img src={ladakh} className='w-100'/> 
                  <div className='position-absolute uper-content text-center'>
                    <h1 className=' front-txt'>Great Service, Cheap Packeges, Easy Website Where you can do everything yourself.</h1><br/>
                    <div className='mt-4'>
                      <a href='#gallery' className='list-btn fw-bold fs-4 '>View List</a>
                    </div>
                  </div>
                </div>

              </div>
          </div>


          {/* This is our gallery containt */}
          <div className='text-center py-5' id='gallery'>
            <div className='container'>
              <h1 className='fw-bold mb-4'>PHOTO'S FROM TRAVELLERS</h1>
              <p className='fw-bolder mb-4'>Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.</p>
              <div className='gallery'>
                <div className='row'>
                  <div className='col-4 first-img'><img src={mountain} className='under-img border-round w-100 h-50 pb-1' /><img src={south_india} className='under-img border-round w-100 h-50 pt-1' /></div>
                  <div className='col-4 sec-img'><img src={mumbai} className='under-img border-round w-100 h-100' /></div>
                  <div className='col-4 tha-img'><img src={south_india} className='under-img border-round w-100 h-50 pb-1' /><img src={mountain} className='under-img border-round w-100 h-50 pt-1' /></div>
                </div>
              </div>

            </div>
          </div>




        {/* This is out contact contain */}
          <div className='main-containt'> 
            <div className='container'>
              <div className='row'>
                  <div className='col-8 right-containt'>
                    <p className='fw-bold'>CALL TO ACTION</p>
                    <h2 className='fw-bolder'>READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h2>
                    <p className='fw-bold'>Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.
                      Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.
                      Fusce hic angue.Fusce hic angue.Fusce hic angue.Fusce hic angue.
                    </p>
                  </div>
                  <div className='col-4 contact-btn text-center left-containt'><button><NavLink to='/contect' className='p-2'>Contact-us</NavLink></button></div>
              </div>
             </div>
          </div>
        </>
    )
}