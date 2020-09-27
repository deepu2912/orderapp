import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Index from './Pages/index';
import Login from './Pages/Login';
import Restuarant from './Pages/Restuarant';

export default class Routes extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/" component={Index}></Route>
                 <Route exact path="/getstarted/:rid/:tableid" component={Index}></Route>
                 <Route  path="/login" component={Login}></Route>
                 <Route  path="/restuarant" component={Restuarant}></Route>
            {/* <Route exact path="/"  component={Home}></Route>
            <Route exact path="/about" component={Aboutus}></Route>
            <Route exact path="/solutions" component={Solutions}></Route>
            <Route exact path="/embroidery" component={Embroidery}></Route>
            <Route exact path="/vector" component={Vector}></Route>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/whywe" component={WhyWe}></Route>
            <Route exact path="/contact" component={ContactUs}></Route> 
            <Route exact path="/sample" component={Sample}></Route> 
            <Route exact path="/queries" component={Queries}></Route> 
            <Route exact path="/faq" component={Faq}></Route> 
            <Route exact path="/privacy" component={Privacy}></Route>
            <Route exact path="/termsandconditions" component={TermsAndConditions}></Route>
            <Route exact path="/admin" component={Admin} ></Route>
            <Route component={NotFound}></Route>  */}
          </Switch> 
        )
    }
}
