import React, { useContext } from "react";
import CategoryContext from "../../hooks/context";
import Layout from "../../hoc/Layout";

export default function ViewCategory() {
  const { state } = useContext(CategoryContext);
  return (
    <Layout>
      <div className="home">
        <div className="ui container">
          <h2 className="header2">
            {state.currentCategory.name || "Please select a category first"}
          </h2>
          <h3>id:{state.currentCategory.id}</h3>
        </div>
      </div>
    </Layout>
  );
}
