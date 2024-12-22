import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './reducer';
const store = configureStore(themeReducer);

export default store;