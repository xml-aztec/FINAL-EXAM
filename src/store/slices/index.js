import { combineReducers } from "@reduxjs/toolkit";
import loginFormReducer from "./loginFormSlice";
const rootReducer = combineReducers({ loginForm: loginFormReducer });
export default rootReducer;
