import React, { useState, useContext, useEffect } from "react";
import LocationsContext from "../../hooks/locationsContext";
import CategoryContext from "../../hooks/context";
import { Link } from "react-router-dom";
import Layout from "../../hoc/Layout";
import { Button, Form, Message, Input, Modal } from "semantic-ui-react";
import CategoryOptions from "./CategoryOptions";
// import MapForm from "./MapForm/MapForm";
import MapDragPin from "./MapForm/MapDragPin";

const INITIAL_LOCATION = {
  name: "",
  address: "",
  latitude: "",
  longitude: "",
  category: ""
};

export default function AddLocation() {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const { state } = useContext(CategoryContext);
  const [lastcreated, setLastcreated] = useState("");
  const [success, setSuccess] = useState(false);
  const { locations, dispatchLoactions } = useContext(LocationsContext);
  const [modalOpen, setModelOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const key = "locations";

  //use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(locations));
  }, [locations]);

  const handleChange = event => {
    const { name, value } = event.target;
    setLocation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatchLoactions({ type: "CREATE_LOC", payload: location });
    if (location !== "") {
      setSuccess(true);
      setLastcreated(location);
      setLocation(INITIAL_LOCATION);
    }
  }
  const hadleCoordinates = event => {
    event.target = { name: "longitude", value: event[0] };
    handleChange(event);
    event.target = { name: "latitude", value: event[1] };
    handleChange(event);
    setIsDisabled(false);
  };
  return (
    <Layout>
      <div className="home">
        <div className="ui container header2">
          {/* If location was Added display back button */}
          {success ? (
            <Link to="/locations">
              {" "}
              <Button basic color="olive">
                Go Back to locations
              </Button>
            </Link>
          ) : (
            <h2>Add New Location</h2>
          )}
        </div>
        <div className="ui container addForm">
          <Form success={success} onSubmit={handleSubmit}>
            <Form.Field
              required
              label="Location Name"
              control={Input}
              placeholder="Name"
              onChange={handleChange}
              value={location.name}
              name="name"
            />
            <Form.Field
              required
              control={Input}
              label="Address"
              placeholder="Address"
              onChange={handleChange}
              value={location.address}
              name="address"
            />{" "}
            <Button
              onClick={() => setModelOpen(true)}
              style={{ display: "block", marginBottom: "10px" }}
              basic
              color="green"
            >
              Set Location
            </Button>
            <Modal
              open={modalOpen}
              dimmer={"blurring"}
              closeOnDimmerClick={true}
            >
              <Modal.Header>Drag Pin To Set Coordinates</Modal.Header>
              <Modal.Content>
                <MapDragPin hadleCoordinates={hadleCoordinates} />
              </Modal.Content>
              <Modal.Actions>
                <Button
                  style={{ display: "block", marginBottom: "10px" }}
                  basic
                  color="green"
                  onClick={() => setModelOpen(false)}
                >
                  Set Location
                </Button>
              </Modal.Actions>
            </Modal>
            <Form.Group widths="equal">
              <Form.Field
                required
                disabled
                control={Input}
                label="Lat"
                placeholder="Latitude"
                onChange={handleChange}
                value={location.latitude}
                name="latitude"
              />{" "}
              <Form.Field
                required
                disabled
                control={Input}
                label="Long"
                placeholder="Longitude"
                onChange={handleChange}
                value={location.longitude}
                name="longitude"
              />
            </Form.Group>
            <CategoryOptions
              categories={state.categories}
              handleChange={handleChange}
            />
            <Form.Field
              disabled={isDisabled}
              control={Button}
              type="submit"
              color="olive"
              style={{ marginTop: "10px" }}
            >
              Submit New Location
            </Form.Field>
            <Message
              success
              icon="check"
              header="Success !!!"
              content={`Location ** ${lastcreated.name} ** Added :)`}
            />
          </Form>
        </div>
      </div>
    </Layout>
  );
}
