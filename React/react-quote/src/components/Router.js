import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from '../utils/history';
import * as routes from '../constants/routes';
import fourohfour from './Fourohfour';
import home from "./main";
import about from "./AboutUs";

const AppRouter = () => (
    <Router history={history}> 
        <Switch>
            <Route exact path={routes.ABOUT} component={about} />
            <Route exact path={routes.HOME} component={home} />
            <Route exact path="*" component={fourohfour} />
        </Switch>
    </Router>
);

export default AppRouter;