import React, { useContext } from "react";
import CategoryContext from "../../hooks/context";
import { List } from "semantic-ui-react";

export default function CategoryList({ filterLocByCat }) {
  const { state, dispatch } = useContext(CategoryContext);
  const localState = JSON.parse(localStorage.getItem("categories"));

  const categories = localState || state;

  function handleClick(category) {
    dispatch({ type: "SET_CORRENT_CAT", payload: category });
    filterLocByCat(category);
  }

  return (
    <div>
      <List horizontal divided relaxed>
        {categories.categories.map(category => (
          <List.Item
            key={category.id}
            onClick={() => handleClick(category)}
            className="flex"
          >
            <List.Content
              className={`flex ${state.currentCategory.name === category.name &&
                "highlited"}`}
            >
              <List.Description as="a">{category.name}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
