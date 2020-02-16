import * as _ from "lodash";
import * as React from "react";

import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { IReactionDisposer, observable, reaction } from "mobx";
import { observer } from "mobx-react";

import { EnvironmentConfig } from "../../../assembly/EnvironmentConfig";
import { LatLng } from "../../../contracts/location/LatLng";
import { KeyedLiteral } from "../../../foundation";

import { GoogleMapProps } from "./GoogleMapProps";

import "./styles.scss";

@observer
class GoogleMapClass extends React.Component<GoogleMapProps> {

    @observable
    private location: KeyedLiteral[];

    @observable
    private isLoading: boolean = true;

    private disposables: IReactionDisposer[] = [];

    public componentDidMount() {
        const { address } = this.props;

        new this.props.google.maps.Geocoder().geocode({ address }, (location) => {
            this.location = location;
        });

        this.disposables = [
            reaction(() => this.location, (location) => {
                if (!_.isEmpty(location)) {
                    this.isLoading = false;
                }
            }, { fireImmediately: true }),
        ];
    }

    public componentWillUnmount() {
        this.disposables.forEach((dispose) => dispose());
    }

    public render() {

        if (this.isLoading || _.isEmpty(this.location) || !this.props.loaded) {
            return null;
        }

        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={13}
                    initialCenter={this.getCenter(this.location[0].geometry.location)}
                >
                    <Marker mapCenter={this.getCenter(this.location[0].geometry.location)} />
                </Map>
            </div>
        );
    }

    private getCenter(location: KeyedLiteral): LatLng {
        return {
            lat: location.lat(),
            lng: location.lng(),
        };
    }
}

export const GoogleMap = GoogleApiWrapper({
    apiKey: EnvironmentConfig.get("GOOGLE_MAP_API_KEY"),
})(GoogleMapClass);
