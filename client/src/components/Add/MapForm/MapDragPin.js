import React, { useState } from "react";
import MapGL, { Marker, NavigationControl } from "react-map-gl";

import Pin from "./Pin";

const TOKEN =
  "pk.eyJ1IjoiZ2FhZ2FpIiwiYSI6ImNrNWZxb3JkdjBkMmszbG53bDYza2FiYTEifQ.0g0MmVmuInQc8AThqDNlAQ";

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

export default function MapDragPin({ hadleCoordinates }) {
  const [viewport, setViewport] = useState({
    latitude: 32.08642879334798,
    longitude: 34.78966712951661,
    zoom: 13,
    bearing: 0,
    pitch: 0
  });
  const [marker, setMarker] = useState({
    latitude: 32.0864288,
    longitude: 34.7896672
  });
  const [events, setEvents] = useState({});

  function _logDragEvent(name, event) {
    setEvents({
      ...events,
      [name]: event.lngLat
    });
  }

  const _onMarkerDragStart = event => {
    _logDragEvent("onDragStart", event);
  };

  const _onMarkerDrag = event => {
    _logDragEvent("onDrag", event);
  };

  const _onMarkerDragEnd = event => {
    _logDragEvent("onDragEnd", event);
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });

    hadleCoordinates(event.lngLat);
  };

  return (
    <MapGL
      {...viewport}
      width=" 100%"
      height="250px"
      mapStyle="mapbox://styles/gaagai/ck2yygcwp0g2m1cphpnxmkppv"
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
    >
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        offsetTop={-20}
        offsetLeft={-10}
        draggable
        onDragStart={_onMarkerDragStart}
        onDrag={_onMarkerDrag}
        onDragEnd={_onMarkerDragEnd}
      >
        <Pin size={20} />
      </Marker>

      <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={setViewport} />
      </div>
    </MapGL>
  );
}
