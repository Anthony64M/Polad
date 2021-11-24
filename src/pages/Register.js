import React from 'react';
import PropTypes from 'prop-types';
import './Register.css';


class Register extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <div className="container-center-horizontal mt-5">
            <div className="cards-default">
                <form>
                    <h3>Sign up</h3>
                    
                    <div className="form-group mt-2">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="User Name" 
                         value={this.state.username}
                             onChange={this.handle_change}
                              />
                    </div>
                    

                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                          value={this.state.password}
                             onChange={this.handle_change}
                            />
                    </div>

                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button className="btn btn-primary btn-block mt-3">Register</button>                
                </form>
            </div>
        </div>
    </form>
    );
  }
}

    export default Register;

    Register.propTypes = {
      Register: PropTypes.func.isRequired
    };
    

