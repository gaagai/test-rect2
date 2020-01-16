import React, { useContext, useState, useEffect } from "react";
import LocationsContext from "../../hooks/locationsContext";
import { List } from "semantic-ui-react";

export default function LocationsList({ alphabetSorted }) {
  const { locations, dispatchLoactions } = useContext(LocationsContext);
  const localState = JSON.parse(localStorage.getItem("locations"));

  const locationList = localState || locations;
  const [sorted, setSorted] = useState(locationList);

  useEffect(() => {
    const toSort = alphabetSorted;
    if (toSort === true) {
      const rearranged = {};
      rearranged.locations = sorted.locations.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setSorted(rearranged);
    }
  }, [alphabetSorted, sorted.locations]);

  let sortedList = alphabetSorted !== "true" ? sorted : locationList;

  return (
    <div className="ui container">
      {sortedList && (
        <List horizontal divided relaxed>
          {sortedList.locations.map(location => (
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
          ))}
        </List>
      )}
    </div>
  );
}
