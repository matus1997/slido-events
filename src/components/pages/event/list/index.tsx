import * as React from "react";

import { inject, observer } from "mobx-react";

import { StateInject } from "../../../../assembly/StateInject";
import { injectProvider } from "../../../../foundation/InjectProvider";

import { Button } from "../../../base/button";
import { VerticalFlow } from "../../../base/flow/vertical";
import { Header } from "../../../items/header";
import { EventRow } from "../../../layouts/event-row";

import { EventListProps, EventListProviderProps } from "./EventListProps";

import "./styles.scss";

@inject(StateInject.Event)
@observer
@injectProvider()
export class EventList extends React.Component<EventListProps> {

    private provider: EventListProviderProps;

    public render() {
        const { eventState } = this.provider;

        return (
            <VerticalFlow className="event-list">
                <Header title="Events" rightAccessory={this.renderRightAccessory()} />
                <VerticalFlow className="event-list__content">
                    {eventState.sorted.map(($) => <EventRow key={$.id} event={$} />)}
                </VerticalFlow>
            </VerticalFlow>
        );
    }

    private renderRightAccessory = () => <Button to="/new">Create Event</Button>;
}
