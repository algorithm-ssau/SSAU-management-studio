import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDEvTools} from 'redux-devtools-extension';
import thunk from "react-redux";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,

})

export const store = createStore(rootReducer, composeWithDEvTools(applyMiddleware(thunk)))