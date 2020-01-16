import React, { useContext, useState } from "react";
import { Menu, List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LocationsContext from "../../hooks/locationsContext";
import CategorySelect from "../CatList/CategorySelect";
import LoactionsBar from "../Header/LocationsBar";
import Layout from "../../hoc/Layout";

export default function FilterLocations() {
  const { locations, dispatchLoactions } = useContext(LocationsContext);
  const [filteredList, setFilteredList] = useState(locations);
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [category, setCategory] = useState("");
  function filterLocByCat(category) {
    setCategory(category);
    setFilterIsOn(true);
    const filtered = {};
    filtered.locations = locations.locations.filter(
      loc => category.name === loc.category
    );
    setFilteredList(filtered);
  }

  return (
    <Layout>
      <div className="home">
        <Menu stackable className="ui container">
          <Menu.Item to="/locations" as={NavLink}>
            ⇦ Go back to - Locations
          </Menu.Item>
        </Menu>
        <h2 className="headerGroup">Filter By Cat</h2>
        <CategorySelect filterLocByCat={filterLocByCat} />
        <div>
          <h2
            className="headerGroup"
            style={{ paddingTop: "10px", textAlign: "center" }}
          >
            {filterIsOn ? `${category.name}` : "Locations:"}
          </h2>

          <List className="ui container" horizontal divided relaxed>
            {filteredList.locations.length > 0 ? (
              filteredList.locations.map(location => (
                <List.Item
                  key={location.id}
                  onClick={() =>
                    dispatchLoactions({
                      type: "SET_CORRENT_LOC",
                      payload: location
                    })
                  }
                  className="flex"
                >
                  <List.Content
                    className={`flex ${locations.currentLocation.name ===
                      location.name && "highlited"}`}
                  >
                    <List.Description as="a">{location.name}</List.Description>
                  </List.Content>
                </List.Item>
              ))
            ) : (
              <h3 style={{ textAlign: "center" }}>
                Sorry, No Locations in this Category
              </h3>
            )}
          </List>
        </div>
      </div>
      <LoactionsBar />
    </Layout>
  );
}
