import uuidv4 from "uuid/v4";

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_CORRENT_CAT":
      return {
        ...state,
        currentCategory: action.payload
      };
    case "CREACTE_CAT":
      //don't allow empty categories
      if (!action.payload) {
        return state;
      }
      //No duplicat categoreis
      if (state.categories.findIndex(cat => cat.name === action.payload) > -1) {
        return state;
      }
      const newCat = {
        id: uuidv4(),
        name: action.payload
      };
      const addedCat = [...state.categories, newCat];
      return {
        ...state,
        categories: addedCat
      };

    case "EDIT_CAT":
      const updatedCat = { ...state.currentCategory, name: action.payload };
      const updatedCatIndex = state.categories.findIndex(
        cat => cat.id === state.currentCategory.id
      );
      const updatedCategories = [
        ...state.categories.slice(0, updatedCatIndex),
        updatedCat,
        ...state.categories.slice(updatedCatIndex + 1)
      ];
      return {
        ...state,
        currentCategory: {},
        categories: updatedCategories
      };

    case "DELETE_CAT":
      const filteredCategories = state.categories.filter(
        cat => cat.id !== action.payload.id
      );
      const isRemovedCat =
        state.currentCategory.id === action.payload.id
          ? {}
          : state.currentCategory;
      return {
        ...state,
        currentCategory: isRemovedCat,
        categories: filteredCategories
      };
    default:
      return state;
  }
}
