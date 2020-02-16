import * as _ from "lodash";

import { FieldValidator } from "final-form";
import { Moment } from "moment";

export const endDateValidator: FieldValidator<Moment> = (value, values) => {
    const startDate: Moment = _.get(values, "startDate");
    if (!_.isNil(startDate) && startDate.diff(value) > 0) {
        return "End Date comes before Start Date";
    }
};
