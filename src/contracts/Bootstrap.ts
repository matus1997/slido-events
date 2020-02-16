import { ContainerModule } from "inversify";

import { EventState } from "./event/EventState";

export const bootContracts = (): ContainerModule => {
    return new ContainerModule((bind) => {

        bind(EventState).toSelf();
    });
};
