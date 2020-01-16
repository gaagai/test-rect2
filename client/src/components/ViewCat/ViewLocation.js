import React, { useContext } from "react";
import LocationsContext from "../../hooks/locationsContext";
import Layout from "../../hoc/Layout";
import MapView from "./MapView";
import { Link } from "react-router-dom";

export default function ViewCategory() {
  const { locations } = useContext(LocationsContext);
  const {
    latitude,
    longitude,
    category,
    address,
    id
  } = locations.currentLocation;

  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          <h2>
            {locations.currentLocation.name || (
              <Link to="/locations">Please select a locatoin first</Link>
            )}
          </h2>
          <h3>Category: {category}</h3>
          <h3>Address: {address}</h3>
          <h3>Long: {longitude}</h3>
          <h3>Lat: {latitude}</h3>
          <h5>id:{id}</h5>
          <MapView Long={longitude} Lat={latitude} />
        </div>
      </div>
    </Layout>
  );
}
