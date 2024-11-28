import './css/Tour_packeg.css'
import Tour_packeg1 from './Tour_packeg1';
import Tour_packeg2 from './Tour_packeg2';
import Tour_packeg3 from './Tour_packeg3';
import Tour_packeg4 from './Tour_packeg4';
import Tour_packeg5 from './Tour_packeg5';
import Tour_packeg6 from './Tour_packeg6';

function Tour_packeg(){
    return (
        <><div className='main-packeg pb-5'>
            <div><div className='container-pac mt-5'><Tour_packeg1/></div></div>
            <div><div className='container-pac mt-5'><Tour_packeg2/></div></div>
            <div><div className='container-pac mt-5'><Tour_packeg3/></div></div>
            <div><div className='container-pac mt-5'><Tour_packeg4/></div></div>
            <div><div className='container-pac mt-5'><Tour_packeg5/></div></div>
            <div><div className='container-pac mt-5'><Tour_packeg6/></div></div>
           </div>
        </>
    )
}
export default Tour_packeg;