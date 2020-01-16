import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AddCategory from "./components/Add/AddCategory";
import EditCategory from "./components/Edit/EditCtagory";
import DeleteCategory from "./components/Delete/DeleteCategory";
import ViewCategory from "./components/ViewCat/ViewCategory";
import Locations from "./components/Locations/Locations";
import DeleteLocation from "./components/Delete/DeleteLocation";
import AddLocation from "./components/Add/AddLocation";
import ViewLocation from "./components/ViewCat/ViewLocation";
import GroupByCat from "./components/LocationsList/GroupByCat";
import FilterLocations from "./components/LocationsList/FilterLocations";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/addcat" exact component={AddCategory} />
      <Route path="/editcat" exact component={EditCategory} />
      <Route path="/deletecat" exact component={DeleteCategory} />
      <Route path="/viewcat" exact component={ViewCategory} />
      <Route path="/locations" exact component={Locations} />
      <Route path="/deletelocation" exact component={DeleteLocation} />
      <Route path="/addlocation" exact component={AddLocation} />
      <Route path="/viewlocation" exact component={ViewLocation} />
      <Route path="/grouped" exact component={GroupByCat} />
      <Route path="/filter" exact component={FilterLocations} />
    </Switch>
  );
}
