import * as React from "react";
import * as uuid from "uuid";

import { inject, observer } from "mobx-react";
import { Field, Form, FormProps, FormRenderProps } from "react-final-form";
import { RouteComponentProps, withRouter } from "react-router";

import { StateInject } from "../../../../assembly/StateInject";
import { Event } from "../../../../contracts/event/Event";
import { EventCreate } from "../../../../contracts/event/EventCreate";
import { injectProvider } from "../../../../foundation/InjectProvider";

import { requiredField } from "../../../../validation";
import { composeValidators } from "../../../../validation";
import { endDateValidator } from "../../../../validation";

import { DatePickerAdapter } from "../../../base/adapters/DatePickerAdapter";
import { InputAdapter } from "../../../base/adapters/InputAdapter";
import { TextAreaAdapter } from "../../../base/adapters/TextareaAdapter";
import { Button } from "../../../base/button";
import { Divider } from "../../../base/divider";
import { HorizontalFlow } from "../../../base/flow/horizontal";
import { VerticalFlow } from "../../../base/flow/vertical";

import { CreateEventProviderProps } from "./CreateEventProps";

import "./styles.scss";

const CreateEventFormWrapper = Form as React.FC<FormProps<EventCreate>>;

@inject(StateInject.Event)
@observer
@injectProvider()
class CreateEventFormClass extends React.Component<RouteComponentProps> {

    private provider: CreateEventProviderProps;

    public render() {
        return (
            <VerticalFlow className="create-event-form">
                <CreateEventFormWrapper
                    onSubmit={this.handleSubmit}
                    render={this.renderForm}
                />
            </VerticalFlow>
        );
    }

    private renderForm = ({ handleSubmit, valid, touched }: FormRenderProps<EventCreate>) => {
        return (
            <form onSubmit={handleSubmit}>
                <HorizontalFlow verticalAlign="flex-start" wrap="wrap">
                    <Field
                        name="name"
                        label="Name"
                        placeholder="Event name"
                        component={InputAdapter}
                        required={true}
                        validate={requiredField}
                        type="text"
                    />
                    <Field
                        name="location"
                        label="Location"
                        placeholder="Bratislava, Slovakia"
                        component={InputAdapter}
                        required={true}
                        validate={requiredField}
                        type="text"
                    />
                </HorizontalFlow>
                <Field
                    name="description"
                    label="Description"
                    component={TextAreaAdapter}
                    required={true}
                    validate={requiredField}
                    type="text"
                />
                <HorizontalFlow spacing="flex-start" verticalAlign="flex-start">
                    <Field
                        name="startDate"
                        label="Start Date"
                        component={DatePickerAdapter}
                        required={true}
                        validate={requiredField}
                    />
                    <Field
                        name="endDate"
                        label="End Date"
                        component={DatePickerAdapter}
                        required={true}
                        validate={composeValidators(requiredField, endDateValidator)}
                    />
                </HorizontalFlow>
                <Divider />
                <HorizontalFlow spacing="space-between">
                    <Button disabled={!valid || !touched} type="primary" buttonType="submit">Create Event</Button>
                    <Button type="danger" to="/">Cancel</Button>
                </HorizontalFlow>
            </form>
        );
    }

    private handleSubmit = (values: EventCreate) => {
        const event: Event = {
            ...values,
            startDate: values.startDate.format(),
            endDate: values.endDate.format(),
            id: uuid.v4(),
            expired: false,
        };

        this.provider.eventState.push(event);
        this.props.history.push("/");
    }
}

export const CreateEventForm = withRouter(CreateEventFormClass);
