import React from "react";

const CategoryContext = React.createContext({
  categories: [
    { id: 1, name: "Attractions" },
    { id: 2, name: "Restaurants" },
    { id: 3, name: "Beaches" },
    { id: 4, name: "ATM" },
    { id: 5, name: "Hotels" }
  ],
  currentCategory: {}
});

export default CategoryContext;
