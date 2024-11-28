import './css/Footer.css'
import { useState } from 'react';

export default function Footer(){
	const[name,setName] = useState('');
	const[email,setEmail] = useState('');
	const[subject,setSubject] = useState('');
	const[message,setMessage] = useState('');

	const handleSubmit = () =>{
		if(name.length === 0){
			alert("Please fill the name!");
		}else if(email.length === 0){
			alert("Please fill the email!");
		}else if(message.length === 0 ){
			alert("Please fill the message!");
		}else{
			const url = "http://localhost.enquiry.php";
			 let fData = new FormData();
			 fData.append('name',name);
			 fData.append('email',email);
			 fData.append('subject',subject);
			 fData.append('message',message);

			 axios.post(url,fData).then(response=> alert(response.data)).catch(error=>alert(error));
		}
	}
    return(
        <>


				<div className='pt-5 par-link-comonent'>
					<div className='container'>
						<div className='row'>
							<div className='col-2'>
								<div className='link-component'><p className='text-dark link-header'>Services</p><hr className='text-black'/>
									<ul>
										<li><a href="#" className=''>Buses</a></li>
										<li><a href="#">E-Catering</a></li>
										<li><a href="#">E-Ticket</a></li>
										<li><a href="#">Flight</a></li>
										<li><a href="#">Hotels</a></li>
										<li><a href="#">Retiring Rooms</a></li>
										<li><a href="#">Travel Agents</a></li>
										<li><a href="#">Affiliate Registration</a></li>
									</ul>
								</div>
							</div>


							<div className='col-2'>
								<div className='link-component'><p className='text-dark link-header'>Domestic Holidays</p><hr className='text-black'/>
									<ul className=''>
										<li><a href="#" className=''>Agra</a></li>
										<li><a href="#">Banglor</a></li>
										<li><a href="#">Chandigarh</a></li>
										<li><a href="#">Chennai</a></li>
										<li><a href="#">Kanyakumari</a></li>
										<li><a href="#">Ooty</a></li>
										<li><a href="#">Chardham</a></li>
										<li><a href="#">Ladhkh</a></li>
									</ul>
								</div>
							</div>

							<div className='col-2'>
								<div className='link-component'> <p className='text-dark link-header'>Domestic Holidays</p><hr className='text-black'/>
									<ul className=''>
										<li><a href="#" className=''>Andaman</a></li>
										<li><a href="#">Goa</a></li>
										<li><a href="#">Gujarat</a></li>
										<li><a href="#">Kerala</a></li>
										<li><a href="#">Maharashtra</a></li>
										<li><a href="#">Rajeshthan</a></li>
									</ul>
								</div>
							</div>

							<div className='col-2'>
								<div className='link-component'><p className='text-dark link-header'>Pilgrimage Tours</p><hr className='text-black'/>
									<ul className=''>
										<li><a href="#" className=''>Kevadia</a></li>
										<li><a href="#">Puri</a></li>
										<li><a href="#">Rameshwaram</a></li>
										<li><a href="#">Shirdi</a></li>
										<li><a href="#">Tirupati</a></li>
										<li><a href="#">Ujjain</a></li>
										<li><a href="#">Vaishno Devi</a></li>
										<li><a href="#">Varansi</a></li>
									</ul>
								</div>
							</div>

							<div className='col-2'>
								<div className='link-component'><p className='text-dark link-header'>Pan-India Tours</p><hr className='text-black'/>
									<ul className=''>
										<li><a href="#" className=''>East-India</a></li>
										<li><a href="#">West-India</a></li>
										<li><a href="#">North-India</a></li>
										<li><a href="#">South-India</a></li>
										<li><a href="#">North-East</a></li>
									</ul>
								</div>
							</div>

							<div className='col-2'>
								<div className='link-component'><p className='text-dark link-header'>About Us</p><hr className='text-black'/>
									<ul className=''>
										<li><a href="#" className=''>About Us</a></li>
										<li><a href="#">Bharat Gaurav</a></li>
										<li><a href="#">Travel Advisory</a></li>
										<li><a href="#">Media Corner</a></li>
										<li><a href="#">Gallery</a></li>
										<li><a href="#">sitemap</a></li>
										<li><a href="#">Blogs</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms & Condition</a></li>
										<li><a href="#">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				


        </>
    )
}