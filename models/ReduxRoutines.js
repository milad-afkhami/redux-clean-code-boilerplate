import { REDUX_ACTION_TYPES } from "@constants";

const initialState = {
  timestamp: null, // timestamp of the last action that was dispatched
  data: null,
  error: null,
  loading: false,
  loaded: false, // is data fulfilled successfully?
  triggerPayload: null, // the payload that reducer got triggered with
};

/**
 * @typedef ReduxRoutineActions
 * @type {object}
 * @property {Function} trigger
 * @property {Function} request
 * @property {Function} success
 * @property {Function} failure
 * @property {Function} fulfill
 * @property {Function} reset
 */
/**
 * @typedef ReduxRoutineActionTypes
 * @type {object}
 * @property {string} TRIGGER
 * @property {string} REQUEST
 * @property {string} SUCCESS
 * @property {string} FAILURE
 * @property {string} FULFILL
 * @property {string} RESET
 */

export function ReduxRoutines(key) {
  const sagaRoutines = createSagaRoutines(key);

  /**
   * @type {ReduxRoutineActions}
   */
  this.actions = sagaRoutines.actions;

  /**
   * @type {ReduxRoutineActionTypes}
   */
  this.actionTypes = sagaRoutines.actionTypes;

  this.reducer = (state, action) =>
    createReducer(state, action, this.actionTypes);
}

function createSagaRoutines(key) {
  return REDUX_ACTION_TYPES.reduce(
    (acc, cv) => {
      // actionTypes = { TRIGGER: `${key}/TRIGGER`, REQUEST: `${key}/REQUEST`, ... }
      acc.actionTypes[cv] = `${key}/${cv}`;

      // actions = { trigger: (payload = {}) => ({ type: actionTypes.TRIGGER, payload }), ... }
      acc.actions[cv.toLowerCase()] = (payload = {}) => ({
        type: acc.actionTypes[cv],
        payload,
      });

      return acc;
    },
    { actions: {}, actionTypes: {} }
  );
}

function createReducer(state = initialState, action, actionTypes) {
  const timestamp = new Date().getTime();
  switch (action.type) {
    case actionTypes.TRIGGER:
      return {
        ...state,
        timestamp,
        triggerPayload: action.payload || null,
        loading: true,
      };
    case actionTypes.REQUEST:
      return {
        ...state,
        timestamp,
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        timestamp,
        data: action.payload,
        error: null,
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        timestamp,
        // data: null,
        error: action.payload,
      };
    case actionTypes.FULFILL:
      return {
        ...state,
        timestamp,
        loading: false,
        loaded: true,
      };
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
