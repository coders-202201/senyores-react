import actionsTypes from "./actionsTypes";

export const deleteGentlemanAction = (id) => ({
  type: actionsTypes.deleteGentleman,
  id,
});

export const toggleGentlemanAction = (id) => ({
  type: actionsTypes.toggleGentleman,
  id,
});

export const selectAllGentlemenAction = () => ({
  type: actionsTypes.selectAllGentlemen,
});
