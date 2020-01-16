import uuidv4 from "uuid/v4";

export default function locationsReducer(state, action) {
  switch (action.type) {
    case "SET_CORRENT_LOC":
      return {
        ...state,
        currentLocation: action.payload
      };
    case "CREATE_LOC":
      //don't allow empty locations
      if (!action.payload) {
        return state;
      }
      //No duplicat locations
      if (state.locations.findIndex(loc => loc.name === action.payload) > -1) {
        return state;
      }
      const newLoc = {
        id: uuidv4(),
        name: action.payload.name,
        address: action.payload.address,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        category: action.payload.category
      };
      const addedLoc = [...state.locations, newLoc];
      return {
        ...state,
        locations: addedLoc
      };
    case "DELETE_LOC":
      const filteredLocations = state.locations.filter(
        loc => loc.id !== action.payload.id
      );
      const isRemovedLoc =
        state.currentLocation.id === action.payload.id
          ? {}
          : state.currentLocation;
      return {
        ...state,
        currentLocation: isRemovedLoc,
        locations: filteredLocations
      };
    default:
      return state;
  }
}
