import { put, delay } from "redux-saga/effects";

export default function* handleSagaError(error, status = "failure") {
  if (error.type === "serverError") {
    yield put(alert("layout.alert.error.server"));
    yield delay(6000);
    return;
  }

  if (error.type === "internet") {
    yield put(alert("layout.alert.error.connection"));
    yield delay(6000);
    return;
  }

  if (error.type >= 500) {
    yield put(alert("layout.alert.error.server"));
    yield delay(6000);
  }
}
