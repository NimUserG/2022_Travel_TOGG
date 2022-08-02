import React, { Component } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

class MyComponents extends Component {
    render() {
      return (
        <LoadScript
          googleMapsApiKey="AIzaSyDpQKIsBojlAQ0ZAcJL-RbGWnGZJqBpLU8"
        >
          <GoogleMap
            bootstrapURLKeys={{key:"AIzaSyDpQKIsBojlAQ0ZAcJL-RbGWnGZJqBpLU8"}}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>

    //     <div className="map">
    //     <GoogleMap
    //     	bootstrapURLKeys = {{ key:"AIzaSyDpQKIsBojlAQ0ZAcJL-RbGWnGZJqBpLU8", }}
    //       	defaultZoom={15}
    //       	defaultCenter={{ lat: 37.5, lng: 127 }}
    //     ></GoogleMap>
    //   </div>
      )
    }
  }

  
export default MyComponents;