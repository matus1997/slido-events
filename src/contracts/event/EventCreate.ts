import { Moment } from "moment";
import { Event } from "./Event";

type EventPick = "name" | "description" | "location" | "id";

export interface EventCreate extends Pick<Event, EventPick> {
    startDate: Moment;
    endDate: Moment;
}
