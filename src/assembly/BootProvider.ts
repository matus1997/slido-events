import { Container } from "inversify";

import { bootContracts } from "../contracts/Bootstrap";
import { EventState } from "../contracts/event/EventState";
import { KeyedLiteral } from "../foundation";

import { StateInject } from "./StateInject";

const boot = new Container();
boot.load(...[
    bootContracts(),
]);

export const provideOnDemandBoot = (): KeyedLiteral => ({
    [StateInject.Event]: () => boot.get(EventState),
});

export const provideBoot = (): KeyedLiteral => ({
    [StateInject.Event]: boot.get(EventState),
});
