import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../hooks/context";
import { Link } from "react-router-dom";
import { Button, Form, Message, Input } from "semantic-ui-react";
import Layout from "../../hoc/Layout";

export default function EditCategory() {
  const { state, dispatch } = useContext(CategoryContext);
  const [category, setCategory] = useState("");
  const [lastcreated, setLastcreated] = useState("");
  const [success, setSuccess] = useState(false);
  const key = "categories";
  //use useEffect to update localStorage when state changes
  useEffect(() => {
    if (state.currentCategory.name) {
      setCategory(state.currentCategory.name);
    }
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "EDIT_CAT", payload: category });
    setSuccess(true);
    setLastcreated(category);
    setCategory("");
  };
  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          {/* If category was edited display back button */}
          {category === "" ? (
            <Link to="/">
              {" "}
              <Button basic color="olive">
                Go Back to Categories
              </Button>
            </Link>
          ) : (
            <h2>{`Edit: ${state.currentCategory.name}`}</h2>
          )}
        </div>
        <div className="ui container addForm">
          <Form success={success} onSubmit={handleSubmit}>
            <Form.Field
              control={Input}
              name="name"
              label="Category Name"
              placeholder={state.currentCategory.name}
              onChange={event => setCategory(event.target.value)}
              value={category}
            />
            <Form.Field control={Button} type="submit" basic color="olive">
              Edit Category
            </Form.Field>
            <Message
              success
              icon="check"
              header="Success !!!"
              content={`Changed submited to: ${lastcreated}`}
            />
          </Form>
        </div>
      </div>
    </Layout>
  );
}
// EDIT_CAT;
