import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Main from "./Main";
import Def from "./def";

const MainRouter = () => (
    <Switch>
        <Route exact path="/def" component={Def} />
        <Route exact path="/" component={Main} />
    </Switch>
);

export default MainRouter;