import actionsTypes from "./actionsTypes";

export const loadGentlemenAction = (gentlemen) => ({
  type: actionsTypes.loadGentlemen,
  gentlemen,
});

export const addGentlemanAction = (gentleman) => ({
  type: actionsTypes.addGentleman,
  gentleman,
});

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
