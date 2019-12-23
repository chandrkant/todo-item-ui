import React, {Component} from 'react';
import {Switch,Route} from "react-router";
import Nav from "./Nav";
import Dashboard from "./dashboard";
import Home from "./home";
import Login from "./auth/login";
import Register from "./auth/register";
import './App.css';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        }
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }
     handleSuccessfulAuth = (data)=>{
        this.props.history.push('/dash-board');
    }
    render() {
        return(
            <div className="App">
                <Nav/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home {...props} isLoggedIn={this.state.isLoggedIn} />
                        )}
                    />
                    <Route exact path="/login" component={Login}/>
                    <Route
                        exact
                        path="/register"
                        component={Register}
                        render={props => (
                            <Register {...props} isLoggedIn={this.state.isLoggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                        )}
                    />
                    <Route
                        exact
                        path="/dash-board"
                        render={props => (
                            <Dashboard {...props} isLoggedIn={this.state.isLoggedIn} />
                        )}

                    />
                </Switch>
            </div>
        )
    }

}


export default App;
