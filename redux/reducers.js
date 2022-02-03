import { todosKey, todosReducer } from "./modules/todo/list";
import { todoDetailsKey, todoDetailsReducer } from "./modules/todo/detail";

export const reducers = {
  [todosKey]: todosReducer,
  [todoDetailsKey]: todoDetailsReducer,
};
