import React from 'react';
import './Login.css';
import tweet from './tweet.png';
import google from './google.png';


  
const Login = () => {

    return (
        <div className="login">
            <div className="container-center-horizontal mt-5">
                <div className="cards-default mt-3">
                    <div className="polad-1">
                        POLAD
                    </div>
                    <h1 className="log-in-to-polad">
                        Log In to POLAD
                    </h1>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group mt-4">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                         </div>
                         

                         <button type="button" className="btn btn-outline-secondary mt-5">Log In</button>
                         <img className="google" src={google} alt="" />
                         <img className="tweet" src={tweet} alt="" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login
