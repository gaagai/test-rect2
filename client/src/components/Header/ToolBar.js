import React, { useContext } from "react";
import CategoryContext from "../../hooks/context";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function ToolBar() {
  const { state, dispatch } = useContext(CategoryContext);
  const selectedCat = state.currentCategory;

  return (
    <Menu stackable className="ui container">
      <Menu.Item
        name="categoryList"
        onClick={() => dispatch({ type: "SET_CORRENT_CAT", payload: {} })}
        as={NavLink}
        exact
        to="/"
      >
        Categories
      </Menu.Item>
      {selectedCat.name && (
        <>
          <Menu.Item name="editCategory" as={NavLink} exact to="/editcat">
            <Icon name="edit outline" />
            Edit
          </Menu.Item>
          <Menu.Item name="deleteCategory" as={NavLink} exact to="/deletecat">
            <Icon name="delete" />
            Delete
          </Menu.Item>
          <Menu.Item name="viewCategory" as={NavLink} exact to="/viewcat">
            <Icon name="eye" />
            View
          </Menu.Item>
        </>
      )}

      <Menu.Item
        name="newCategory"
        as={NavLink}
        exact
        to="/addcat"
        position="right"
      >
        <Icon name="plus" /> New Category
      </Menu.Item>
    </Menu>
  );
}
