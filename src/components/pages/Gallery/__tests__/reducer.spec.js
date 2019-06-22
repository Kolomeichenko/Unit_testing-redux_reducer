import Reducer, { initialState } from "../redux/reducer";
import { photos } from "../mock";

test("check return  initial state ", () => {
  expect(Reducer(initialState, {})).toEqual({
      photos:[],
  });
});

test("check return set photo to state ", () => {
  const action = {
    type: "SET_PHOTOS",
    photos
  };
  expect(Reducer(undefined, action))
  .toEqual({
    ...initialState,
    photos
  });
});
