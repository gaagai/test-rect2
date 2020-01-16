import React from "react";
import "./layout.css";
import HeaderTop from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout(props) {
  return (
    <div className="app">
      <HeaderTop history={props} />
      {props.children}
      <Footer />
    </div>
  );
}
