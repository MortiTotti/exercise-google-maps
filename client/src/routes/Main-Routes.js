import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MarkersListView from 'Views/markers-list';
import MarkerView from 'Views/marker';
import NotFoundView from 'Views/not-found';

const MainRoutes = () =>
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={MarkersListView} />
                <Route path='/marker/:id' component={MarkerView} />
                <Route path='/notfound' component={NotFoundView}></Route>
            </Switch>
        </React.Fragment>
    </Router>

export default MainRoutes;