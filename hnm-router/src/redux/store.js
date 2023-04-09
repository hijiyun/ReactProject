import {legacy_createStore as createStore , applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import rootReducer from "./reducer/index"

let store = createStore( rootReducer ,applyMiddleware(thunk));

export default store;