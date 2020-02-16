import * as moment from "moment";
import * as React from "react";

import { FieldRenderProps } from "react-final-form";

import { DatePicker } from "../../items/date-picker";
import { DatePickerProps } from "../../items/date-picker/DatePickerProps";

export const DatePickerAdapter = (
    { input, meta, ...rest }: FieldRenderProps<moment.Moment | null> & DatePickerProps,
) => {
    return (
        <DatePicker
            {...input}
            {...rest}
            error={meta.error || undefined}
        />
    );
};
