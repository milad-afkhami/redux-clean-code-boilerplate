import { call, put } from "redux-saga/effects";
import { ReduxRoutines } from "@models";
import { Http } from "@utils";
import handleSagaError from "@redux/handleSagaError";
import { endpoints } from "@constants";

const key = "todoDetails";

const { actions, actionTypes, reducer } = new ReduxRoutines(key);

export function* todoDetailsWorker(action) {
  const { type, payload } = action;
  try {
    console.log({ payload });
    yield put(actions.request());
    const response = yield call(Http.get, {
      url: `${endpoints[key]}/${payload.id}`,
    });

    console.log(response);

    yield put(actions.success(response));
    action?.payload?.resolve?.(response);
  } catch (error) {
    console.log({ error });
    yield put(actions.failure(error));
    yield handleSagaError(error);
    action?.payload?.reject?.(error);
  } finally {
    yield put(actions.fulfill());
  }
}

export {
  actions as todoDetailsActions,
  actionTypes as todoDetailsActionTypes,
  reducer as todoDetailsReducer,
  key as todoDetailsKey,
};
