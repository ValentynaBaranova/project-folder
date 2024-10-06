import { ADD_LESSON } from "./actions";
import { lessons as initialLessons } from "./data/lessons";

const initialState = {
  lessons: initialLessons,
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LESSON:
      return {
        ...state,
        lessons: [...state.lessons, action.payload],
      };
    default:
      return state;
  }
};

export default lessonReducer;
