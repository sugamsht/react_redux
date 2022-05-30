import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    // Dummy reducers to avoid warnings
    // dummy: () => 'This is fake reducer'
    posts: postsReducer,
    users: usersReducer
});