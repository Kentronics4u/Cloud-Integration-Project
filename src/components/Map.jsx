import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  //defaultloc is where the landing location of the map.
  //the location is within Abuja.
  const defaultloc = {
    center: {
      lat: 9.03331,
      lng: 7.4442,
    },
    zoom: 10,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCOD_ZNxrdO0Dr2FGQ10VBGoNeRf0zt4dI" }}//API key gotten from Google
        defaultCenter={defaultloc.center}
        defaultZoom={defaultloc.zoom}
      >
        {/* "Any AnyReactComponent" is called with location and 'text' props */}
        <AnyReactComponent lat={9.07722} lng={7.47279} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
