import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';
import tweet from './tweet.png';
import google from './google.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false); 
    
    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://poladapi.herokuapp.com/auth/login/', {
            mode: 'no-cors',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/dashboard" />
    }

    return (
            <div className="container-center-horizontal mt-5">
                <div className="cards-default mt-3">
                    <div className="polad-1">
                        POLAD
                    </div>
                    <h1 className="log-in-to-polad">
                        Log In to POLAD
                    </h1>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" required
                            onChange={e => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                            />
                         </div>
                         

                         <button type="button" className="btn btn-primary btn-block mt-5">Login</button>
                         <img className="google" src={google} alt="" />
                         <img className="tweet" src={tweet} alt="" />
                    </form>
                </div>
            </div>
    );
}

export default Login;
