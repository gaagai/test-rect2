import React from "react";

const LocationsContext = React.createContext({
  locations: [
    {
      id: 1,
      name: "Hilton",
      address: "Hitlton 1 St",
      longitude: "34.770817",
      latitude: "32.0895867",
      category: "Hotels"
    },
    {
      id: 2,
      name: "Messa",
      address: "Haarbaa 4 St",
      longitude: "34.7868466",
      latitude: "32.0704641",
      category: "Restaurants"
    },
    {
      id: 3,
      name: "Gordon Beach",
      address: "Gordon Beach",
      longitude: "34.76761918",
      latitude: "32.08316055",
      category: "Beaches"
    },
    {
      id: 4,
      name: "Cantina",
      address: "Rothschild 71",
      longitude: "34.7767884",
      latitude: "32.0657753",
      category: "Restaurants"
    },
    {
      id: 5,
      name: "Intercontinental",
      address: "Kaufmann St 12",
      longitude: "34.76368236290579",
      latitude: "32.06539385",
      category: "Hotels"
    },
    {
      id: 6,
      name: "Jerusalem Beach",
      address: "Jerusalem Beach",
      longitude: "34.76453229",
      latitude: "32.07443424",
      category: "Beaches"
    },
    {
      id: 7,
      name: "Dan Tel",
      address: "HaYarkon St 99",
      longitude: "34.76734405",
      latitude: "32.07935405",
      category: "Hotels"
    },
    {
      id: 8,
      name: "Art Museum",
      address: "Sha'ul HaMelech 27",
      longitude: "34.7866202",
      latitude: "32.0776063",
      category: "Attractions"
    }
  ],
  currentLocation: {}
});

export default LocationsContext;
