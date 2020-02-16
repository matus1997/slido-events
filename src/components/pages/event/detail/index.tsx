import * as React from "react";

import { IReactionDisposer, reaction } from "mobx";
import { inject, observer } from "mobx-react";

import { StateInject } from "../../../../assembly/StateInject";
import { injectProvider } from "../../../../foundation/InjectProvider";

import { Button } from "../../../base/button";
import { HorizontalFlow } from "../../../base/flow/horizontal";
import { VerticalFlow } from "../../../base/flow/vertical";
import { Text, Typography } from "../../../base/text";
import { EventInfo } from "../../../items/event-info";
import { Header } from "../../../items/header";

import { EventDetailProps, EventDetailProviderProps } from "./EventDetailProps";

import "./styles.scss";

@inject(StateInject.Event)
@observer
@injectProvider()
export class EventDetail extends React.Component<EventDetailProps> {

    private provider: EventDetailProviderProps;

    private disposables: IReactionDisposer[] = [];

    public componentDidMount() {
        this.provider.eventState.get(this.props.match.params.eventId);

        this.disposables = [
            reaction(() => this.provider.eventState.hasCurrent, (hasCurrent) => {
                if (!hasCurrent) {
                    this.props.history.push("/");
                }
            }, { fireImmediately: true }),
        ];
    }

    public componentWillUnmount() {
        this.disposables.forEach((dispose) => dispose());
    }

    public render() {
        const { eventState } = this.provider;

        if (!eventState.hasCurrent) {
            return null;
        }

        return (
            <VerticalFlow className="event-detail">
                <Header leftAccessory={<Button to="/">Back</Button>} />
                <div className="event-detail__wrapper">
                    <Text className="event-detail__wrapper__title" type={Typography.Heading2}>{eventState.current!.name}</Text>
                    <HorizontalFlow spacing="space-between" verticalAlign="flex-start" className="event-detail__wrapper__content">
                        <Text className="event-detail__wrapper__content__description">{eventState.current!.description}</Text>
                        <EventInfo event={eventState.current!} />
                    </HorizontalFlow>
                </div>
            </VerticalFlow>
        );
    }
}
