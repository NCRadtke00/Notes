import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
  try {
    const response = [
      { value: "study for MGP in 6 days", id: 1 },
      { value: "review c# and .net 3.1", id: 2 },
      { value: "build 2 more fullstack projects", id: 3 },
      { value: "Solve more problems", id: 4 },
    ];
    dispatch(ActionCreators.setNotes(response));
  } catch {
    console.log("Error!");
  }
};
