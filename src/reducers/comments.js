import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

function commentsReducers(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.data.map(comment => comment.employee_name);
    return [...state, ...comments]
    default:
      return state;
  }
}

export default commentsReducers;
