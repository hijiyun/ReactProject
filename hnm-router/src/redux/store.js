import {legacy_createStore as createStore , applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import rootReducer from "./reducer/index"
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;