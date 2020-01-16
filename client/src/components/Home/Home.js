import React from "react";
import Layout from "../../hoc/Layout";
import CategortList from "../CatList/CategoryList";
import ToolBar from "../Header/ToolBar";

export default function Home() {
  return (
    <Layout>
      <ToolBar />
      <div className="home">
        <div className="ui container header2">
          <h2>Categories</h2>
        </div>
        <CategortList />
      </div>
    </Layout>
  );
}
