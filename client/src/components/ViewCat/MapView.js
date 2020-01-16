import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

export default function MapView({ Lat, Long }) {
  const latitude = parseFloat(Lat) || 32.08642879334798;
  const longitude = parseFloat(Long) || 34.78966712951661;

  const [viewport, setViewport] = useState({
    latitude: latitude || 32.08642879334798,
    longitude: longitude || 34.78966712951661,
    zoom: 13,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: 400
  });

  return (
    <>
      {viewport !== {} ? (
        <>
          <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/gaagai/ck2yygcwp0g2m1cphpnxmkppv"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={setViewport}
          >
            <Marker latitude={latitude} longitude={longitude}>
              <img alt="pin" src="/images/pin.svg" />
            </Marker>
          </ReactMapGL>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
