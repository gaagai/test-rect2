import React, { useContext, useEffect, useState } from "react";
import LocationsContext from "../../hooks/locationsContext";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "../../hoc/Layout";

export default function DeleteCategory() {
  const { locations, dispatchLoactions } = useContext(LocationsContext);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const key = "locations";
  //use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(locations));
  }, [locations]);

  const handleDelete = id => {
    dispatchLoactions({
      type: "DELETE_LOC",
      payload: locations.currentLocation
    });
    setSuccess(true);
    setDisabled(true);
  };

  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          {success ? (
            <Link to="/locations">
              <Button basic color="olive">
                Go Back to Locations
              </Button>
            </Link>
          ) : (
            <h2>{`Delete: ${locations.currentLocation.name}`}</h2>
          )}
          <Form success={success}>
            <Form.Field
              control={Button}
              onClick={handleDelete}
              disabled={disabled}
              basic
              color="red"
            >
              Delete from list
            </Form.Field>
            <Message
              success
              icon="check"
              header="Success !!!"
              content="Category Deleted"
            />
          </Form>
        </div>
      </div>
    </Layout>
  );
}
