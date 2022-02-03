import React from "react";
import { loadAsyncAction } from "@utils";
import { useEffect, useDispatch, useSelector, useRouter } from "@hooks";
import { todoDetailsActions, SAGA_END, todoDetailsKey } from "@redux";
import { nextReduxWrapper } from "@redux/store";
import { Spinner } from "@kits";

const TodoPage = (props) => {
  const dispatch = useDispatch();
  const todo = useSelector(todoDetailsKey);

  const router = useRouter();
  useEffect(() => {
    if (router.query.id)
      dispatch(todoDetailsActions.trigger({ id: router.query.id }));
  }, [router.query.id]);

  return (
    <div>
      {todo.data ? (
        <pre>{JSON.stringify(todo.data, null, 2)}</pre>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

// export const getServerSideProps = nextReduxWrapper.getServerSideProps(
//   (store) =>
//     async ({ params, ...rest }) => {
//       store.dispatch(todoDetailsActions.trigger({ id: params.id }));
//       store.dispatch(SAGA_END);
//       await store.sagaTask.toPromise();
//       return { props: {} };
//     }
// );

export default TodoPage;
