export const loadAsyncAction = (dispatch, action, args = {}) =>
  new Promise((resolve, reject) =>
    dispatch(action.trigger({ resolve, reject, ...args }))
  );
