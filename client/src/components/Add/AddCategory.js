import React, { useState, useContext, useEffect } from "react";
import CategoryContext from "../../hooks/context";
import { Link } from "react-router-dom";
import Layout from "../../hoc/Layout";
import { Button, Form, Message } from "semantic-ui-react";

export default function AddCategory() {
  const [category, setCategory] = useState("");
  const [lastcreated, setLastcreated] = useState("");
  const [success, setSuccess] = useState(false);
  const { state, dispatch } = useContext(CategoryContext);
  const key = "categories";
  //use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "CREACTE_CAT", payload: category });
    if (category !== "") {
      setSuccess(true);
      setLastcreated(category);
      setCategory("");
    }
  };

  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          {/* If category was Added display back button */}
          {success ? (
            <Link to="/">
              {" "}
              <Button basic color="olive">
                Go Back to Categories
              </Button>
            </Link>
          ) : (
            <h2>Add New Category</h2>
          )}
        </div>
        <div className="ui container addForm">
          <Form success={success} onSubmit={handleSubmit}>
            <Form.Field>
              <label>New Category</label>
              <input
                placeholder="New Category"
                onChange={event => setCategory(event.target.value)}
                value={category}
              />
            </Form.Field>
            <Form.Field control={Button} type="submit" basic color="olive">
              Submit New Category
            </Form.Field>
            <Message
              success
              icon="check"
              header="Success !!!"
              content={`Category ** ${lastcreated} ** Added :)`}
            />
          </Form>
        </div>
      </div>
    </Layout>
  );
}
