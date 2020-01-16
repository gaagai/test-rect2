import React, { useContext } from "react";
import LocationsContext from "../../hooks/locationsContext";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function LoactionsBar() {
  const { locations } = useContext(LocationsContext);
  const selectedLoc = locations.currentLocation;
  return (
    <Menu stackable className="ui container">
      <Menu.Item
        name="locationsList"
        // onClick={() => }
        as={NavLink}
        exact
        to="/locations"
      >
        Locations
      </Menu.Item>
      {selectedLoc.name && (
        <>
          <Menu.Item
            name="deleteLocation"
            // onClick={}
            as={NavLink}
            exact
            to="/deletelocation"
          >
            <Icon name="delete" />
            Delete
          </Menu.Item>
          <Menu.Item
            name="viewLocation"
            // onClick={}
            as={NavLink}
            exact
            to="/viewlocation"
          >
            <Icon name="eye" />
            View
          </Menu.Item>
        </>
      )}

      <Menu.Item
        name="newLocation"
        // onClick={}
        as={NavLink}
        exact
        to="/addlocation"
        position="right"
      >
        <Icon name="plus" /> New Location
      </Menu.Item>
    </Menu>
  );
}
