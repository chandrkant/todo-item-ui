import React, {Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import './login.css'
class Login extends Component{
    constructor() {
        super();
        this.state ={
            email: '',
            password: '',
            loginError: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event)=> {
        const { email, password } = this.state;
        console.log(email,password);
        axios.post('http://127.0.0.1:3001/auth/login',
            {

                    email: email,
                    password: password
                
            },
            { withCredentials: false }
        ).then((res)=>{
            console.log(res)
        });
        event.preventDefault();
    }
    render() {
        return(
            <div id="login">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form onSubmit={this.handleSubmit}>
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br/>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="username"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br/>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            required
                                            className="form-control"
                                        />
                                        {/*<input type="text" name="password" id="password" className="form-control">*/}
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <Link to={'/register'} className="text-info">Register here</Link>
                                        {/*<a href="#" className="text-info"></a>*/}
                                    </div>
                                    <div className='form-group'>
                                        <button className='btn btn-primary'>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login