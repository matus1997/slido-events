import { RouteComponentProps } from "react-router";

import { EventState } from "../../../../contracts/event/EventState";

export type EventDetailProps = RouteComponentProps<{ eventId: string }>;

export interface EventDetailProviderProps {
    eventState: EventState;
}
