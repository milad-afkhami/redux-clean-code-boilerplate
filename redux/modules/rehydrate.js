import { select } from "redux-saga/effects";
import handleSagaError from "redux/handleSagaError";

export function* rehydrateWorker(store, payload) {
  const { resolve = () => {}, reject = () => {} } = payload || {};
  try {
    resolve();
  } catch (e) {
    reject(e);
    handleSagaError(e);
  }
}
