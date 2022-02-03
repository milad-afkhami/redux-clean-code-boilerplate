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

      <h2>
        <string>Source code: </string>
        <big>
          <a
            href="https://github.com/miladMAPS/redux-clean-code-boilerplate"
            target="_blank"
          >
            github
          </a>
        </big>
      </h2>
      <hr />
      <div>
        <h2>Mapping over server side fetched data:</h2>
        {todos.data ? (
          <ul>
            {todos.data.map((todo) => (
              <li>
                <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <hr />
      <h2>
        Walkthrough the code:{" "}
        <a href="https://mili-portfolio.vercel.app/blog/redux-clean-code"></a>
      </h2>
      <div style={{ border: "2px solid gray" }}>
        <iframe
          src="https://mili-portfolio.vercel.app/blog/redux-clean-code"
          title="Source code of this blog"
          width="100%"
          height="500px"
          class="frame"
          frameborder="0"
        />
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
