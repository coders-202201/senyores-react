import actionsTypes from "../actions/gentlemen/actionsTypes";
import gentlemenReducer from "./gentlemenReducer";

describe("Given a gentlemenReducer function", () => {
  describe("When it receives El Fary unselected and Julius unselected and the action 'select-all-gentleman'", () => {
    test("Then it should return both gentlemen selected", () => {
      const currentGentlemen = [
        {
          id: 1,
          name: "El Fary",
          picture: "",
          profession: "",
          twitter: "",
          status: "",
          selected: false,
        },
        {
          id: 2,
          name: "Julius",
          picture: "",
          profession: "",
          twitter: "",
          status: "",
          selected: false,
        },
      ];
      const action = {
        type: actionsTypes.selectAllGentlemen,
      };
      const expectedNewGentlemen = [
        {
          id: 1,
          name: "El Fary",
          picture: "",
          profession: "",
          twitter: "",
          status: "",
          selected: true,
        },
        {
          id: 2,
          name: "Julius",
          picture: "",
          profession: "",
          twitter: "",
          status: "",
          selected: true,
        },
      ];

      const newGentlemen = gentlemenReducer(currentGentlemen, action);

      expect(newGentlemen).toEqual(expectedNewGentlemen);
    });
  });
});
