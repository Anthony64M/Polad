import React from 'react';
import './Register.css';

function Register() {
    
    return (
        <div className="container-center-horizontal mt-5">
            <div className="cards-default mt-3">
                <form>
                    <h3>Sign up</h3>
                    
                    <div className="form-group mt-2">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    
                    <div className="form-group mt-2">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    
                    <div className="form-group mt-2">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button className="btn btn-primary btn-block mt-3">Sign up</button>                
                </form>
            </div>
        </div>
    );
}

export default Register
