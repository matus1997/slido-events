import * as moment from "moment";
import * as React from "react";

import classNames from "classnames";

import { DatePattern } from "../../../foundation/date/DatePattern";

import { VerticalFlow } from "../../base/flow/vertical";
import { Text, Typography } from "../../base/text";
import { GoogleMap } from "../map";

import { EventLocationProps } from "./EventLocationProps";

import "./styles.scss";

export class EventInfo extends React.Component<EventLocationProps> {

    public render() {
        const { event } = this.props;

        return (
            <VerticalFlow className={classNames("event-info", this.props.className)}>

                <Text className="event-info__subtitle" type={Typography.Heading3Bold}>Start</Text>
                <Text type={Typography.Heading3}>{moment(event.startDate).format(DatePattern.Long)}</Text>

                <Text className="event-info__subtitle" type={Typography.Heading3Bold}>End</Text>
                <Text type={Typography.Heading3}>{moment(event.endDate).format(DatePattern.Long)}</Text>

                <Text className="event-info__subtitle" type={Typography.Heading3Bold}>Location</Text>
                <a href={`https://www.google.com/maps/place/${event.location}`} target="_blank">
                    <Text className="event-info__title" type={Typography.Label}>{event.location}</Text>
                </a>
                <GoogleMap address={event.location} />
            </VerticalFlow>
        );
    }
}
