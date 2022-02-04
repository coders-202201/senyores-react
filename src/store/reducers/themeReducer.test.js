import themeReducer from "./themeReducer";

describe("Given a themeReducer reducer", () => {
  describe("When it receives 'dark' and a toggle action", () => {
    test("Then it should return 'light'", () => {
      const currentTheme = "dark";
      const action = {
        type: "toggle-theme",
      };
      const expectedNewTheme = "light";

      const newTheme = themeReducer(currentTheme, action);

      expect(newTheme).toBe(expectedNewTheme);
    });
  });
});
