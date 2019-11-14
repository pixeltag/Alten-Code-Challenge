import React from 'react'
import GoogleMapReact from 'google-map-react';
import { isolateVehicles } from "../../lib/utils";
import MapCard from './MapCard';

const MAP_API = process.env.REACT_APP_MAP_API;

const defaultProps = {
    center: {
      lat: 59.319323,
      lng: 18.098581
    },
    zoom: 13
  };

function TracerMap(props) {

    const { customers } = props || [];

    const mapData = isolateVehicles(customers);
    return (
        <div style={{ height: "calc(100vh - 66px)", width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                {
                    mapData.map((card , index) => card.vehicle.status ? <MapCard lat={card.vehicle.lat} lng={card.vehicle.long} card={card} key={index} /> : false)
                }
            </GoogleMapReact>
        </div>
    )
}

export default TracerMap
