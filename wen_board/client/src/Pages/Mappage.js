import React, { Component } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    // width: '400px',
    height: '700px',
    margin: '10px'
  };
  
  const center = {
    lat: 35.134440436932586,
    lng: 129.10330006422268 
  };

  const zoom = 18;

class MyComponents extends Component {
    render() {
      return (
        <LoadScript
          googleMapsApiKey="AIzaSyDWe1cq9AXDxaJOJ30mctlAnN8yYXvh1bM"
        >
          <GoogleMap
            bootstrapURLKeys={{key:"AIzaSyDWe1cq9AXDxaJOJ30mctlAnN8yYXvh1bM"}}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
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