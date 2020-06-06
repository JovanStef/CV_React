import React, { Component } from 'react';
import {Route , Switch , Redirect} from 'react-router-dom';

//COMPONENTS
import Layout from './hoc/Layout/index';

class Routes extends Component{
    render()
    {
        return(
        <Switch>
            <Redirect exact from="/" to="/en" />
            <Route path="/:id" exact component={Layout}/>
            <Route path="/mk" exact component={Layout}/>
            <Route path="/ru" exact component={Layout}/>


        </Switch>
    )
}
}

export default Routes;