import { RouteComponentProps } from "react-router";

import { EventState } from "../../../../contracts/event/EventState";

export type EventListProps = RouteComponentProps<{ eventId?: string }>;

export interface EventListProviderProps {
    eventState: EventState;
}
