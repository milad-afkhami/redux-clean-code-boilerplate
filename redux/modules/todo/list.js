import { call, put } from "redux-saga/effects";
import { ReduxRoutines } from "@models";
import { Http } from "@utils";
import handleSagaError from "@redux/handleSagaError";
import { endpoints } from "@constants";

const key = "todos";

const { actions, actionTypes, reducer } = new ReduxRoutines(key);

export function* todosWorker(action) {
  const { type, payload } = action;
  try {
    yield put(actions.request());
    const response = yield call(Http.get, { url: endpoints[key] });

    const result = response.slice(0, 10);

    yield put(actions.success(result));
    action?.payload?.resolve?.(result);
  } catch (error) {
    yield put(actions.failure(error));
    yield handleSagaError(error);
    action?.payload?.reject?.(error);
  } finally {
    yield put(actions.fulfill());
  }
}

export {
  actions as todosActions,
  actionTypes as todosActionTypes,
  reducer as todosReducer,
  key as todosKey,
};
