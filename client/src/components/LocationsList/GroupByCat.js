import React, { useContext, useState, useEffect } from "react";
import LocationsContext from "../../hooks/locationsContext";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Layout from "../../hoc/Layout";

export default function GroupByCat() {
  const { locations } = useContext(LocationsContext);
  const localState = JSON.parse(localStorage.getItem("locations"));

  const locationList = localState || locations;
  const [grouped, setGrouped] = useState(locationList);
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    const groupBy = function groupBy(key) {
      return function(array) {
        return array.reduce(function(objectsByKeyValue, obj) {
          const value = obj[key];
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
            obj
          );
          return objectsByKeyValue;
        }, {});
      };
    };
    const groupByCat = groupBy("category");

    const groupedList = groupByCat(grouped.locations);

    setFinalList(groupedList);
  }, [grouped.locations]);

  const entries = Object.entries(finalList);

  return (
    <Layout>
      <div className="home">
        <Menu stackable className="ui container">
          <Menu.Item to="/locations" as={NavLink}>
            ⇦ Go back to - Locations
          </Menu.Item>
        </Menu>
        <div>
          <h2 className="headerGroup">Group By Cat</h2>
          {entries &&
            entries.map((cat, index) => (
              <div key={index}>
                <ul className="groupUl">
                  <h3 className="group">{cat[0]}:</h3>
                  {cat[1].map((loc, index) => (
                    <li className="groupLi" key={index}>
                      {loc.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
