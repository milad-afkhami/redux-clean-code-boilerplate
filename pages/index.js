import React from "react";
import { loadAsyncAction } from "@utils";
import { useEffect, useDispatch, useSelector } from "@hooks";
import { todosActions, SAGA_END } from "@redux";
import { nextReduxWrapper } from "@redux/store";
import Link from "next/link";

const Home = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector("todos");
  const titleOfFirstTodo = useSelector("todos.data[0].title");

  // useEffect(() => {
  //   dispatch(todosActions.trigger());
  // }, []);

  return (
    <div>
      <h1>Redux Clean Code Boilerplate</h1>
      <p>
        Source code:{" "}
        <strong>
          <a
            href="https://github.com/miladMAPS/redux-clean-code-boilerplate"
            target="_blank"
          >
            github
          </a>
        </strong>
      </p>

      <hr />
      <div>
        <h2>Mapping over server side fetched data:</h2>
        <ul>
          {todos.data.map((todo) => (
            <li>
              <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h2>Getting data about one piece of state:</h2>
        <p>title of first todo: {titleOfFirstTodo}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) =>
    async ({ ...rest }) => {
      store.dispatch(todosActions.trigger());
      store.dispatch(SAGA_END);
      await store.sagaTask.toPromise();
      return { props: {} };
    }
);

export default Home;
