import './css/Menu.css'
import { NavLink } from 'react-router-dom'


export default function Menu(){
    return(
        <>
            {/* Navigation Menu         */}
            <div className='navigation-bar fixed-top'>
                {/* for fixed nav bar use " fixed-top" class */}


                <div className="main-menu row">
                    <div className='col-3 text-center pt-3 logo-img'> 
                        {/* <img src={logo} alt="Logo" width={"120px"} height={"120px"}/> */}
                        <h2>Tour & Travels</h2>
                    </div>
                    <div className='menu-link col-6 text-center'>
                            <ul className='link-list pt-4 d-flex justify-content-center'> 
                                <li><NavLink to='/' className='p-2'>Home</NavLink></li>
                                <li><NavLink to='/tour_packeg' className='p-2'>Packages</NavLink></li>
                                <li><NavLink to='/contect' className='p-2'>Contact-us</NavLink></li>
                                <li><NavLink to='/about' className='p-2'>About</NavLink></li>
                                <li><NavLink to='/registration' className='p-2'>Registration</NavLink></li>
                                <li><NavLink to='/login' className='p-2'>Login</NavLink></li>
                            </ul>
                    </div>
                    <div className='col-3'>
                        <div className='pt-4 search-div'>
                            <input type='text' placeholder='Search'/>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}