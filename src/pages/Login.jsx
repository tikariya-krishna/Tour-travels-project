// import './php_file/login.php'
import './css/login.css'
export default function Login(){
    return(
        <>
         <div>
            <div className="form-container">
                <div className='main-form py-3'>
                    <div className="login-containt my-5 p-3">
                        <h1 className="text-center text-dark">LOGIN</h1><br/>

                        <form className="text-center" method='post' action='php_file/login.php'>
                            
                            <div className="pt-3 form-input-field">
                                {/* <label htmlFor="username">Username:-</label> */}
                            <input type="text" name="username" id="username" placeholder='USERNAME' /></div>

                            <div className="pt-4 form-input-field">
                                {/* <label htmlFor="password">Password:-</label> */}
                            <input type="text" name="password" id="password" placeholder='PASSWORD' /><br/></div>
                            <button type="submit" className="login-btn">login</button><br/>

                            
                            <div className='pt-5 text-dark'><input type='checkbox' name='conditon'/><span> By continuing, i agree to the term of use & Private policy</span> </div>

                            <div className='pt-2'><p>Create a New account? <a href='#'>Click here</a></p></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}