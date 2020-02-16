import * as _ from "lodash";

import { assertThrow } from "../foundation/";

export class EnvironmentConfig {
    public static get(name: string, fallback?: string): string {
        const value = _.get(process.env, name, fallback || "");
        if (_.isNil(fallback)) {
            assertThrow(!_.isEmpty(value), () => `${name} is not defined in .env`);
        }
        return value;
    }
}
