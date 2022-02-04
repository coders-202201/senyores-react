import { useCallback, useContext } from "react";
import {
  setErrorAction,
  setLoadingAction,
  unsetErrorAction,
  unsetLoadingAction,
} from "../store/actions/api/actionsCreators";
import {
  addGentlemanAction,
  deleteGentlemanAction,
  loadGentlemenAction,
} from "../store/actions/gentlemen/actionsCreators";
import APIContext from "../store/contexts/APIContext";
import GentlemenContext from "../store/contexts/GentlemenContext";

const useAPI = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const { dispatch } = useContext(GentlemenContext);
  const { dispatch: dispatchAPI } = useContext(APIContext);

  const loadGentlemenAPI = useCallback(async () => {
    try {
      dispatchAPI(setLoadingAction());
      dispatchAPI(unsetErrorAction());
      const response = await fetch(apiURL);
      const gentlemen = await response.json();
      dispatch(loadGentlemenAction(gentlemen));
    } catch (error) {
      dispatchAPI(setErrorAction());
    }
    dispatchAPI(unsetLoadingAction());
  }, [apiURL, dispatch, dispatchAPI]);

  const addGentlemanAPI = async (gentleman) => {
    try {
      dispatchAPI(setLoadingAction());
      dispatchAPI(unsetErrorAction());
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gentleman),
      });
      const newGentleman = await response.json();
      dispatch(addGentlemanAction(newGentleman));
    } catch (error) {
      dispatchAPI(setErrorAction());
    }
    dispatchAPI(unsetLoadingAction());
  };

  const deleteGentlemanAPI = async (id) => {
    dispatchAPI(setLoadingAction());
    try {
      dispatchAPI(unsetErrorAction());
      const response = await fetch(`${apiURL}${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(deleteGentlemanAction(id));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatchAPI(setErrorAction());
    }
    dispatchAPI(unsetLoadingAction());
  };

  return {
    loadGentlemenAPI,
    addGentlemanAPI,
    deleteGentlemanAPI,
  };
};

export default useAPI;
