import './css/contact.css'
export default function Contact(){
    return(
        <>
        <div className='bg-white py-5'>
            <div className='container'>
                <div className='upper-containt'>
                    <h1 className='fw-bolder text-decoration-underline'>Contact Us</h1>
                    <p className='fw-bold'>
                        Custome Service - real customer service - is one of our core values.So, we promise to go above and beyond to get what you need. if you can't find your answer on our FAQ page, Please see how to get in touch with us. We look forward to hearing from you.
                    </p>
                </div>

                <div className='footer-containt'>
                    <div className='row'>
                        <div className='col-6'>
                            <h3 className='fw-bold text-decoration-underline'>Email Address</h3>
                            <div className='infomation'>
                                <div> 
                                    <a href="#">support@rxbar.com</a>
                                    <p>We typically respond within 24 business hours.</p>

                                    <a href="#">media@rxbar.com</a>
                                    <p>For media inquiries:</p>

                                    <p className='mb-0'>For wholesale inquiries:</p>
                                    <a href="#">media@rxbar.com</a>
                                </div>


                                <div className='mt-4'>
                                    <h2 className='fw-bold text-decoration-underline'>Phone</h2>
                                    <p>312-624-8200</p>
                                    <p>Monday-Friday 9am-5pm CT</p>
                                </div>

                                <div className='mt-4'>
                                    <h2 className='fw-bold text-decoration-underline'>Address</h2>
                                    <p>412 N Wells <br/> Chicago, IL 60654</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                            <h3 className='fw-bold text-decoration-underline'>Send Us a Message.</h3>
                            <div className='contact-form'>
                                <form method='post' >
                                    <input placeholder='First name' name='fname' className='w-75'/><br/>
                                    <input placeholder='Last name' name='lname' className='mt-3 w-75'/><br/>
                                    <input placeholder='E-mail Address' name='email' className='mt-3 w-75'/><br/>
                                    <input placeholder='Phone' name='phone' className='mt-3 w-75'/><br/>
                                    <textarea placeholder='Message' name='message' className='mt-3 w-75' rows={5}></textarea><br/>
                                    <button className='mt-3 w-75'>Submit</button>   
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        </>
    )
}