import {
  deleteGentlemanAction,
  toggleGentlemanAction,
} from "./actionsCreators";

describe("Given a deleteGentlemanAction function", () => {
  describe("When it receives an id 10", () => {
    test("Then it should return an action with type 'delete-gentleman' and id 10", () => {
      const id = 10;
      const expectedAction = {
        type: "delete-gentleman",
        id,
      };

      const action = deleteGentlemanAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a toggleGentlemanAction", () => {
  describe("When it receives an id 3", () => {
    test("Then it should return an action with type 'toggle-gentleman' and id 3", () => {
      const id = 3;
      const expectedAction = {
        type: "toggle-gentleman",
        id,
      };

      const action = toggleGentlemanAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
