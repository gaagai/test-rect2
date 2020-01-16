import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import CategoryContext from "./hooks/context";
import CategoryReducer from "./hooks/reducer";
import LocationsContext from "./hooks/locationsContext";
import LocationsReducer from "./hooks/locationsReducer";

const App = () => {
  const initialState = useContext(CategoryContext);
  const [state, dispatch] = useReducer(CategoryReducer, initialState);
  const initialLoactions = useContext(LocationsContext);
  const [locations, dispatchLoactions] = useReducer(
    LocationsReducer,
    initialLoactions
  );

  return (
    <BrowserRouter>
      <CategoryContext.Provider value={{ state, dispatch }}>
        <LocationsContext.Provider value={{ locations, dispatchLoactions }}>
          <Router />
        </LocationsContext.Provider>
      </CategoryContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
