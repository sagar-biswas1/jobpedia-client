import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import jobsReducer from "./reducers/jobsReducer";
import loginReducer from "./reducers/loginReducer";
import packageReducer from "./reducers/packageReducer";

const middleware = applyMiddleware(thunk);
const combinedReducer = combineReducers({
  jobs: jobsReducer,
  userData: loginReducer,
  allPackages: packageReducer,
});

const store = createStore(combinedReducer, composeWithDevTools(middleware));

export default store;
