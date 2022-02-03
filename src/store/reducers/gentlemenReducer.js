import actionsTypes from "../actions/actionsTypes";

const gentlemenReducer = (currentGentlemen, action) => {
  let newGentlemen;

  switch (action.type) {
    case actionsTypes.deleteGentleman:
      newGentlemen = currentGentlemen.filter(
        (gentleman) => gentleman.id !== action.id
      );
      break;
    case actionsTypes.toggleGentleman:
      newGentlemen = currentGentlemen.map((gentleman) => {
        if (gentleman.id === action.id) {
          return {
            ...gentleman,
            selected: !gentleman.selected,
          };
        }
        return { ...gentleman };
      });
      break;
    case actionsTypes.selectAllGentlemen:
      newGentlemen = currentGentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }));
      break;
    default:
      newGentlemen = [...currentGentlemen];
  }

  return newGentlemen;
};

export default gentlemenReducer;
