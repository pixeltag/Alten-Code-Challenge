import React from 'react'
import GoogleMapReact from 'google-map-react';

const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

function TracerMap() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 55555 }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
            {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            /> */}
            </GoogleMapReact>
        </div>
    )
}

export default TracerMap
