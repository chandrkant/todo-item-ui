import React, {Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import './login.css'
class Login extends Component{
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: '',
            name:'',
            passwordConf: '',
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
        const { email, password,name, passwordConf} = this.state;
        console.log(email,password);
        console.log(name,passwordConf);
        if(password !==passwordConf){
            alert("Error")
        }
        axios.post('http://127.0.0.1:3001/signup',
            {

                email: email,
                name: name,
                password: password,
                password_confirmation: passwordConf,

            },
            { withCredentials: false }
        ).then((res)=>{
            console.log(res)
            this.props.handleSuccessfulAuth(res.data)
        });
        event.preventDefault();
    }
    render() {
        return(
            <div id="register">
                <div className="container">
                    <div id="register-row" className="row justify-content-center align-items-center">
                        <div id="register-column" className="col-md-6">
                            <div id="register-box" className="col-md-12">
                                <form onSubmit={this.handleSubmit}>
                                    <h3 className="text-center text-info">Register</h3>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-info">Email:</label><br/>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="email"
                                            autoComplete='false'
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Name:</label><br/>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="name"
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
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br/>
                                        <input
                                            type="password"
                                            name="passwordConf"
                                            placeholder="Password confirmation"
                                            value={this.state.passwordConf}
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
                                        <button className='btn btn-block btn-primary'>Sign In</button>
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