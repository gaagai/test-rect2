import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../hooks/context";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "../../hoc/Layout";

export default function DeleteCategory() {
  const { state, dispatch } = useContext(CategoryContext);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const key = "categories";
  //use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const handleDelete = id => {
    dispatch({ type: "DELETE_CAT", payload: state.currentCategory });
    setSuccess(true);
    setDisabled(true);
  };

  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          {success ? (
            <Link to="/">
              <Button basic color="olive">
                Go Back to Categories
              </Button>
            </Link>
          ) : (
            <h2>{`Delete: ${state.currentCategory.name}`}</h2>
          )}
          <Form success={success}>
            <Form.Field
              control={Button}
              onClick={handleDelete}
              disabled={disabled}
              basic
              color="red"
              icon="trash alternate outline"
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
