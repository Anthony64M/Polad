import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';


class Login extends React.Component {
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
        <form onSubmit={e => this.props.handle_login(e, this.state)}>

            <div className="container-center-horizontal mt-5">
                <div className="cards-default mt-3">
                    <div className="polad-1">
                        POLAD
                    </div>
                    <form>
                        <div className="form-group ">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" 
                            value={this.state.username.username}
                            onChange={this.handle_change}/>
                        </div>

        {/* <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" /> */}
                            <div className="form-group mt-4">
                           <label htmlFor="password">Password</label>
                             <input type="password" className="form-control" placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handle_change}/>
                          </div>
                <h1 className="log-in-to-polad">
                         Log In to POLAD
                    </h1> 
                         <button type="button" className="btn btn-outline-primary mt-3"onClick={this.login}>Log In</button>


      </form>
      </div>
      </div>
    
    </form>

  );
}
}

export default Login;

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};


// import React, {Component} from 'react';
// import './Login.css';
// import tweet from './tweet.png';
// import google from './google.png';

// class Login extends Component {

//     state = {
//         credentials: {username: '', password: ''}
//     }
//     login = event => {
//         console.log(this.state.credentials);
//         fetch('https://poladapi.herokuapp.com/auth/login/', {
//             mode: 'no-cors',
//             method: 'POST',
//             headers: {'Content-Type': 'application.json'},
//             body: JSON.stringify(this.state.credentials)
//     })
//     .then(data => data.json())
//     .then(
//         data => {
//             this.props.userLogin(data.token);
//         }
//         ).catch(error => console.error(error));
// }
// register = event => {
//     console.log(this.state.credentials);
//     fetch('https://poladapi.herokuapp.com/auth/register/', {
//         mode: 'no-cors',
//         method: 'POST',
//         headers: {'Content-Type': 'application.json'},
//         body: JSON.stringify(this.state.credentials)
// })
// .then(data => data.json())
// .then(
//     data => {
//         console.log(data.token);
//     }
//     ).catch(error => console.error(error));
// }

//     inputChanged = event => {
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({credentials: cred});
//     }
//     render() {
//     return (
//             <div className="container-center-horizontal mt-5">
//                 <div className="cards-default mt-3">
//                     <div className="polad-1">
//                         POLAD
//                     </div>
//                     <form>
//                         <div className="form-group ">
//                             <label>Username</label>
//                             <input type="text" className="form-control" placeholder="Username" 
//                             value={this.state.credentials.username}
//                             onChange={this.inputChanged}/>
//                         </div>

//                         <div className="form-group mt-4">
//                             <label>Password</label>
//                             <input type="password" className="form-control" placeholder="Password" 
//                             value={this.state.credentials.password}
//                             onChange={this.inputChanged}/>
//                          </div>
                         
//                     <h1 className="log-in-to-polad">
//                         Log In to POLAD
//                     </h1> 

//                          <button type="button" className="btn btn-outline-primary mt-3"onClick={this.login}>Log In</button>
//                          <button type="button" className="btn btn-outline-primary mt-3"onClick={this.register}>Register</button>

//                          <img className="google" src={google} alt="" />
//                          <img className="tweet" src={tweet} alt="" />
//                     </form>
//                 </div>
//             </div>
//     );
// }
// }

// export default Login
