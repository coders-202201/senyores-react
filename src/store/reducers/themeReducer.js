import actionsTypes from "../actions/theme/actionsTypes";

const themeReducer = (currentTheme, action) => {
  let newTheme;

  switch (action.type) {
    case actionsTypes.toggleTheme:
      newTheme = currentTheme === "light" ? "dark" : "light";
      break;
    default:
      newTheme = currentTheme;
  }

  return newTheme;
};

export default themeReducer;
