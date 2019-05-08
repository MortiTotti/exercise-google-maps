import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'Views/home';
import Data from 'Views/data';

const MainRoutes = () =>
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/data/:id' component={Data} />
                <Route path='/data' component={Data} />
            </Switch>
        </React.Fragment>
    </Router>

export default MainRoutes;