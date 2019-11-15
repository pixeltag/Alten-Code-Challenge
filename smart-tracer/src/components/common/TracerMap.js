import React from 'react'
import GoogleMapReact from 'google-map-react';
import { isolateVehicles } from "../../lib/utils";
import MapCard from './MapCard';
import PropTypes from 'prop-types'

const MAP_API = process.env.REACT_APP_MAP_API;

const defaultProps = {
    center: {
      lat: 59.319323,
      lng: 18.098581
    },
    zoom: 13
  };

function TracerMap(props) {

    const handleCollapse = () => {
        props.onCollapse();
    }

    const { customers } = props || [];
    const mapData = isolateVehicles(customers);
    return (
        <div style={{ height: "calc(100vh - 66px)", width: '100%' }}>
            {/* <button onClick={handleCollapse}></button> */}
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

TracerMap.propTypes = {
    customers : PropTypes.arrayOf(
        PropTypes.shape({
            _id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            address : PropTypes.string.isRequired,
            vehicles : PropTypes.arrayOf(
                PropTypes.shape({
                    lat : PropTypes.string.isRequired,
                    long : PropTypes.string.isRequired,
                    mark : PropTypes.string.isRequired,
                    model : PropTypes.string.isRequired,
                    reg_num : PropTypes.string.isRequired,
                    status : PropTypes.bool.isRequired,
                    user_id : PropTypes.number.isRequired,
                    vehicle_id : PropTypes.string.isRequired,
                    _id : PropTypes.number.isRequired
                })
            )
        })
    )
}

export default TracerMap
