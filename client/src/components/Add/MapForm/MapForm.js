import React, { Component } from "react";
import MapGL, { Marker, NavigationControl } from "react-map-gl";

import Pin from "./Pin";

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "9px"
};

export default class MapForm extends Component {
  state = {
    viewport: {
      latitude: 32.08642879334798,
      longitude: 34.78966712951661,
      zoom: 13,
      bearing: 0,
      pitch: 0
    },
    marker: {
      latitude: 32.0864288,
      longitude: 34.7896672
    },
    events: {}
  };

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  _onMarkerDragStart = event => {
    this._logDragEvent("onDragStart", event);
  };

  _onMarkerDrag = event => {
    this._logDragEvent("onDrag", event);
  };

  _onMarkerDragEnd = event => {
    this._logDragEvent("onDragEnd", event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };

  render() {
    const { viewport, marker } = this.state;

    return (
      <MapGL
        {...viewport}
        width=" 100%"
        height="250px"
        mapStyle="mapbox://styles/gaagai/ck2yygcwp0g2m1cphpnxmkppv"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={this._onMarkerDragStart}
          onDrag={this._onMarkerDrag}
          onDragEnd={this._onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>
      </MapGL>
    );
  }
}
