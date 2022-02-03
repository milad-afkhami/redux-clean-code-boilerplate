import { all, takeEvery } from "redux-saga/effects";
import {
  APP_HYDRATION,
  //
  REHYDRATE,
  rehydrateWorker,
  //
  todosActionTypes,
  todosWorker,
  //
  todoDetailsActionTypes,
  todoDetailsWorker,
} from "./index";

export function* rootSaga() {
  yield all([
    takeEvery(APP_HYDRATION, rehydrateWorker),
    takeEvery(todosActionTypes.TRIGGER, todosWorker),
    takeEvery(todoDetailsActionTypes.TRIGGER, todoDetailsWorker),
  ]);
}
