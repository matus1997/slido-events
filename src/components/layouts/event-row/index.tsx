import * as React from "react";

import { baseClassModifier } from "../../../foundation/ui";

import { Button } from "../../base/button";
import { Divider } from "../../base/divider";
import { HorizontalFlow } from "../../base/flow/horizontal";
import { VerticalFlow } from "../../base/flow/vertical";
import { Text, Typography } from "../../base/text";
import { Date } from "../../items/date";

import { EventRowProps } from "./EventRowProps";

import "./styles.scss";

const location = require("./images/location.svg");

export const EventRow = ({ event }: EventRowProps) => (
    <VerticalFlow className={baseClassModifier("event-row", { expired: event.expired })}>
        <HorizontalFlow spacing="space-between" className="event-row__content">
            <HorizontalFlow spacing="flex-start">
                <Date className="event-row__date" date={event.startDate} />
                <VerticalFlow>
                    <Text to={`/${event.id}`} type={Typography.Heading3}>{event.name}</Text>
                    <HorizontalFlow className="event-row__location" spacing="flex-start">
                        <img className="event-row__location__icon" src={location} alt="" />
                        <Text type={Typography.Label}>{event.location}</Text>
                    </HorizontalFlow>
                </VerticalFlow>
            </HorizontalFlow>
            <Button className="event-row__cta" to={`/${event.id}`}>Show More</Button>
        </HorizontalFlow>
        <Divider />
    </VerticalFlow>
);
