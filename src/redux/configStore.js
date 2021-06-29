import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dic from "./modules/dictionary";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ dic });
const store = createStore(rootReducer, enhancer);

export default store;
