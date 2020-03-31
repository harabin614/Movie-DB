import React from "react";
import classes from "./Map.module.css";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Map, GoogleApiWrapper } from "google-maps-react";

const googleMap = props => {
  return (
    <div className={classes.Map}>
      <Map
        google={props.google}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        style={{ width: "500px", height: "300px", margin: "0 auto" }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDojS50q3f4GW0XB8aJhjAUym-JN8XLKq8"
})(googleMap);

// <LoadScript
//   id="script-loader"
//   googleMapsApiKey="AIzaSyDojS50q3f4GW0XB8aJhjAUym-JN8XLKq8"
// >
//   <GoogleMap
//     id="example-map"
//     mapContainerStyle={{ height: "300px", width: "500px" }}
//   >
//     ...Your map components
//   </GoogleMap>
// </LoadScript>;
