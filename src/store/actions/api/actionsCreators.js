import actionsTypes from "./actionsTypes";

export const setLoadingAction = () => ({
  type: actionsTypes.setLoading,
});

export const unsetLoadingAction = () => ({
  type: actionsTypes.unsetLoading,
});

export const setErrorAction = () => ({
  type: actionsTypes.setError,
});

export const unsetErrorAction = () => ({
  type: actionsTypes.unsetError,
});
