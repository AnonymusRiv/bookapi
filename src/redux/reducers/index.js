import { combineReducers } from "redux";
import book from "./book";
import categories from "./categories";

export default combineReducers({
    book,
    categories
})