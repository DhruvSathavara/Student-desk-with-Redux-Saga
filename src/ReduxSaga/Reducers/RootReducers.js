import { combineReducers } from "redux";
import AllBooks from './ListReducer'
import DetailBook from "./DetailReducer";

const rootReducer = combineReducers({
    AllBooks,
    DetailBook
})
export default rootReducer;