import React, { useState } from "react";
import Layout from "../../hoc/Layout";
import LoactionsBar from "../Header/LocationsBar";
import LocationsList from "../LocationsList/LocationsList";
import LocationsHeader from "./LocationsHeader";

export default function Home(props) {
  const [alphabetSorted, setAlphabetSorted] = useState(false);

  return (
    <Layout>
      <div className="home">
        <LocationsHeader
          setAlphabetSorted={setAlphabetSorted}
          alphabetSorted={alphabetSorted}
          history={props.history}
        />
        <div className="ui container header2">
          <h2>Locations</h2>
          <LocationsList alphabetSorted={alphabetSorted} />
        </div>
        <LoactionsBar />
      </div>
    </Layout>
  );
}
