import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Index from './Pages/index';
import Login from './Pages/Login';
import Qrcode from './Pages/Qrcode';
import QrCodeScanner from './Pages/QrcodeScanner';
import Restuarant from './Pages/Restuarant';

export default class Routes extends Component {
    render() {
        return (

            <Switch>
                 {/* <Route exact path="/" component={Index}></Route> */}
                 <Route exact path="/getstarted/:rid/:tableid" component={Index}></Route>
                 <Route exact path="/login" component={Login}></Route>
                 <Route exact path="/qrcode" component={Qrcode}></Route>
                 <Route exact path="/restuarant" component={Restuarant}></Route> 
                 <Route exact path="/qrcodeScanner" component={QrCodeScanner}></Route> 
          </Switch> 
        )
    }
}
