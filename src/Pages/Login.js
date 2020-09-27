import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import Restuarant from './Restuarant';
// import { Redirect } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super();
        let prefix = window.location.host.startsWith("http") ? "" : "http://";
        //using host here, as I'm redirecting to another location on the same host
        this.target = prefix + window.location.host + '/restuarant';

    }

    state = {
        login: false
    }
    saveuserData = (e) => {
        e.preventDefault()
        
        this.setState({
            login: true
        })
    }

    render() { 
        debugger
       
        if (this.state.login) {
          return <Redirect to='/restuarant'/>;
        }
        return (
            <>
                <div className="login-page vh-100">
                    <video loop autoPlay muted id="vid">
                        <source src="img/bg.mp4" type="video/mp4" />
                        <source src="img/bg.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
                    <div className="p-4">
                        <h2 className="text-white my-0">Welcome Back</h2>
                        <p className="text-white text-50">Sign in to continue</p>
                        <form className="mt-5 mb-4">
                            <div className="form-group">
                                <label htmlFor="InputName" className="text-white">Name</label>
                                <input type="text" placeholder="Enter Name" className="form-control" id="InputName" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputMobile" className="text-white">Mobile No</label>
                                <input type="text" placeholder="Enter Mobile No" className="form-control" id="InputMobile" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail" className="text-white">Email</label>
                                <input type="email" placeholder="Enter Email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                            </div>
                            <button onClick={this.saveuserData} className="btn btn-primary btn-lg btn-block">
                                SIGN IN
                            </button>
                        </form>
                    </div>
                    <div className="fixed-bottom d-flex align-items-center justify-content-center">
                        <a href="signup.html">
                            <p className="text-center text-white m-0">Sign up as Admin</p>
                        </a>
                    </div>
                </div>

            </>
        )
    }
}
