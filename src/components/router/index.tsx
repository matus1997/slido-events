import * as React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Container } from "../base/container";
import { CreateEvent } from "../pages/event/create";
import { EventDetail } from "../pages/event/detail";
import { EventList } from "../pages/event/list";

export const Router = () => {
    return (
        <HashRouter>
            <Container>
                <Switch>
                    <Route path="/" exact={true} component={EventList} />
                    <Route path="/new" exact={true} component={CreateEvent} />
                    <Route path="/:eventId" exact={true} component={EventDetail} />
                </Switch>
            </Container>
        </HashRouter>
    );
};
