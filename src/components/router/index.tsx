import * as React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { EventList } from "../pages/event/list";

export const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={EventList} />
            </Switch>
        </HashRouter>
    );
};
