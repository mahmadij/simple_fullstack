import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './header'
import {Home} from './home.js';
import {About} from './about';
import ConnectedEditPage from './edit'
import Login from './login'
import NotFound from './notfound'

export const Routes = (props) => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/edit/:id" component={ConnectedEditPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}