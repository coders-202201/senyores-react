import actionsTypes from "../actions/api/actionsTypes";

const apiReducer = (apiStatus, action) => {
  let newApiStatus;

  switch (action.type) {
    case actionsTypes.setLoading:
      newApiStatus = {
        ...apiStatus,
        loading: true,
      };
      break;
    case actionsTypes.unsetLoading:
      newApiStatus = {
        ...apiStatus,
        loading: false,
      };
      break;
    case actionsTypes.setError:
      newApiStatus = {
        ...apiStatus,
        error: true,
      };
      break;
    case actionsTypes.unsetError:
      newApiStatus = {
        ...apiStatus,
        error: false,
      };
      break;
    default:
      newApiStatus = { ...apiStatus };
  }

  return newApiStatus;
};

export default apiReducer;
