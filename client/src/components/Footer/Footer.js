import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="ui container footer">
      <div className="buttonsFooter">
        <div>
          <Link to="/">
            <Button basic color="olive" size="medium">
              Categories
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/locations">
            <Button basic color="olive" size="medium">
              Locations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
