import React, { useState } from 'react';
import './Register.css';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch("https://poladapi.herokuapp.com/auth/register/", {
            mode: 'no-cors',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                first_name,
                last_name,
                email,
                password,
                password2
            })
        });

        setNavigate(true);
    
    }

    if (navigate) {
        return <Navigate to="/dashboard" />;
    }
    
    return (
        <div className="container-center-horizontal mt-5">
              <div className="cards-default">
                <form onSubmit={submit}>
                    <h3>Sign up</h3>
                    
                    <div className="form-group mt-1">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" required
                        onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-1">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" required
                        onChange={e => setFirst_name(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group mt-1">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" required
                        onChange={e => setLast_name(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group mt-1">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" required
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-1">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-1">
                        <label>Password2</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" required
                        onChange={e => setPassword2(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block mt-3">Sign up</button>                
                </form>
            </div>
        </div>
    );
}

export default Register;
