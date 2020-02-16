import * as _ from "lodash";
import * as moment from "moment";

import { injectable } from "inversify";
import { action, computed, observable } from "mobx";

import eventsMock from "../../mocks/events";

import { Event } from "./Event";

@injectable()
export class EventState {

    @observable
    private list$: Event[] = eventsMock;

    @observable
    private current$: Event | undefined;

    @computed
    public get list() {
        return this.list$;
    }

    @computed
    public get current(): Event | undefined {
        return this.current$;
    }

    @computed
    public get hasCurrent(): boolean {
        return !_.isNil(this.current$);
    }

    @computed
    public get sorted(): Event[] {
        return this.list
            .sort((a, b) => {
                const diff = moment(a.startDate).diff(b.startDate);
                return a.expired === b.expired ? (a.expired ? -diff : diff) : (a.expired ? 1 : -1);
            });
    }

    @action
    public push(event: Event) {
        this.list.push(event);
    }

    @action
    public disposeCurrent() {
        this.current$ = undefined;
    }

    @action
    public get(id: string): Event | undefined {
        this.current$ = this.list.find(($) => $.id === id);
        return this.current;
    }

    @action
    public dispose() {
        this.list$ = eventsMock;
        this.disposeCurrent();
    }
}
