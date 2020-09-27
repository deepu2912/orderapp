import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <>
                <div className="bg-primary d-flex align-items-center justify-content-center vh-100 index-page">
                    <div className="text-center"><a href="login.html"><img src="img/logo.png" alt="" /></a><br />
                        <div className="spinner" /></div>
                </div>
                <div className="fixed-bottom d-flex align-items-center justify-content-center">
                    <Link className="btn btn-block d-flex align-items-center btn-lg btn-warning" to="login">
                        Get Started <i className="feather-arrow-right ml-auto" />
                    </Link>
                </div>
            </>
        )
    }
}
