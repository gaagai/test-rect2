import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";

export default function HeaderTop() {
  return (
    <div className="ui container topLogo">
      <Link to="/">
        <Header as="h2" className="topHead">
          <Icon name="location arrow" />
          <Header.Content>My Locations</Header.Content>
        </Header>
      </Link>
    </div>
  );
}
