import { combineReducers } from "redux";
import { operationReducer } from "./todoapp/reducers/operation";

export const rootReducer = combineReducers({
  operationReducer,
  //다른 추가되는 리듀서 있으면 루트 리듀서에 추가해 주면됨
});
