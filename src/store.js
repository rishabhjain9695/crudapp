import rootReducer from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";
const store =configureStore(rootReducer);
export default store;