import * as React from "react";

import { VerticalFlow } from "../../../base/flow/vertical";
import { Header } from "../../../items/header";
import { CreateEventForm } from "../../../layouts/forms/create-event";

export class CreateEvent extends React.Component {
    public render() {
        return (
            <VerticalFlow>
                <Header title="New Event" />
                <CreateEventForm />
            </VerticalFlow>
        );
    }
}
