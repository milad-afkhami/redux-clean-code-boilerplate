export const errorHandlerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);

    const originalResult = next(action);
    // Ignore the original result, return something else
    return "Hello!";
  };
