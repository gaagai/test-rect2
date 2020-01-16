import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function LocationsHeader({ setAlphabetSorted, history }) {
  function handleSortClick() {
    setAlphabetSorted(true);
  }
  function handleGroupClick() {
    history.push({
      pathname: "/grouped"
    });
  }

  return (
    <Menu stackable className="ui container">
      <Menu.Item to="/locations" as={NavLink}>
        Locations
      </Menu.Item>
      <Menu.Item name="aphabetic" onClick={handleSortClick}>
        Sort alphabetically
      </Menu.Item>
      <Menu.Item name="grouped" onClick={handleGroupClick}>
        Groups
      </Menu.Item>
      <Menu.Item name="Filter" to="/filter" as={NavLink}></Menu.Item>
    </Menu>
  );
}
