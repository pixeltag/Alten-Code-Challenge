import React from 'react'
import GoogleMapReact from 'google-map-react';
import { isolateVehicles } from "../../lib/utils";
import MapCard from './MapCard';

const MAP_API = process.env.REACT_APP_MAP_API;

const defaultProps = {
    center: {
      lat: 59.329323,
      lng: 18.068581
    },
    zoom: 12
  };

function TracerMap(props) {

    const { customers } = props || [];

    const mapData = isolateVehicles(customers);
    return (
        <div style={{ height: '95vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                {
                    mapData.map((card , index) => <MapCard lat={card.vehicle.lat} lng={card.vehicle.long} card={card} key={index} />)
                }
            </GoogleMapReact>
        </div>
    )
}

export default TracerMap
