import { useState } from "react"
import './css/Registration.css'
export default function Registration(){

    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleInput= (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(user);
        console.log(user);
    }

     return(
        <>
        <div>
            <div className="form-container py-5">
                <div className="registration-form">
                    <div className="registration-container">
                    <h1 className="text-center">REGISTER YOUR JOURNEY</h1><br/>

                    <form onSubmit={handleSubmit}  className="text-center">
                        <ul>
                        <li>
                        <div className="pt-4 form-input-field">
                            {/* <label htmlFor="username">Username:-</label> */}
                        <input type="text" name="username" id="username" placeholder="USERNAME" required autoComplete="off" value={user.username} onChange={handleInput}/></div>
                        </li>

                        <li>
                        <div className="pt-4 form-input-field">
                            {/* <label htmlFor="email">Email:-</label> */}
                        <input type="email" name="email" id="email" placeholder="EMAIL" required autoComplete="off"  value={user.email} onChange={handleInput}/></div>
                        </li>

                        <li>
                        <div className="pt-4 form-input-field">
                            {/* <label htmlFor="phone">Phone:-</label> */}
                        <input type="text" name="phone" id="phone" placeholder="PHONE" required autoComplete="off"  value={user.phone} onChange={handleInput}/><br/></div>
                        </li>

                        <li>
                        <div className="pt-4 form-input-field">
                            {/* <label htmlFor="password">Password:-</label> */}
                        <input type="text" name="password" id="password" placeholder="PASSWORD" required autoComplete="off"  value={user.password} onChange={handleInput}/><br/></div>
                        </li>
                        </ul>

                        <button type="submit" className="submit-btn">Register Now</button>

                        <div className='pt-5 text-dark'><input type='checkbox' name='conditon'/><span> By continuing, i agree to the term of use & Private policy</span> </div>

                            <div className='pt-2'><p>Already have an account? <a href='#'>Click here</a></p></div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


