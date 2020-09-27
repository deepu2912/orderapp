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
                 <Route exact exact path="/getstarted/:rid/:tableid" component={Index}></Route>
                 <Route exact path="/login" component={Login}></Route>
                 <Route exact path="/restuarant" component={Restuarant}></Route>
                 <Route exact path="/res" component={Restuarant}></Route>
             
          </Switch> 
        )
    }
}
