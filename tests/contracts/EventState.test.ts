import "mocha";
import "reflect-metadata";

import { expect } from "chai";
import { Container } from "inversify";

import { EventState } from "../../src/contracts/event/EventState";

import eventsList from "../../src/mocks/events";

const event = {
    id: "fbdc590d-05ec-4352-bc6b-agk0se8bfe20",
    name: "Sample Event Name",
    description: "Event description",
    startDate: "2018-02-20T16:00:00+01:00",
    endDate: "2018-02-20T20:00:00+01:00",
    location: "Event Location",
    expired: true,
};

describe(`Event State test suite`, () => {
    const container = new Container();

    before(() => {
        container.bind(EventState).toSelf();
    });

    after(() => {
        container.unbindAll();
    });

    it("should return a list of events", (done) => {
        const eventState = container.get(EventState);

        expect(eventState.list).to.eql(eventsList);

        done();
    });

    it("should add a new event to the list", (done) => {
        const eventState = container.get(EventState);

        eventState.push(event);
        expect(eventState.list).to.eql([...eventsList, event]);

        done();
    });

    it("should sort events by date an expiration", (done) => {
        const eventState = container.get(EventState);

        expect(eventState.sorted[0]).to.eql(eventsList[0]);
        expect(eventState.sorted[3]).to.eql(eventsList[2]);

        done();
    });

    it("should get event by id", (done) => {
        const eventState = container.get(EventState);

        eventState.push(event);
        expect(eventState.get(event.id)).to.eql(event);

        done();
    });

    it("should dispose current Event", (done) => {
        const eventState = container.get(EventState);

        eventState.get(eventsList[0].id);
        expect(eventState.current).to.eql(eventsList[0]);
        eventState.disposeCurrent();
        expect(eventState.current).to.eql(undefined);

        done();
    });

    it("should dispose eventState", (done) => {
        const eventState = container.get(EventState);

        eventState.push(event);
        eventState.dispose();
        expect(eventState.list).to.eql(eventsList);
        expect(eventState.current).to.eql(undefined);

        done();
    });
});
