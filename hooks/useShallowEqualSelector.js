import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { __get } from "@utils";

/**
 * custom useSelector hook with shallowEqual and enhanced selector.
 * Read more about it in Documentation( {@link https://portfolio-mili.vercel.app/gists/useShallowEqualSelector} )
 * @param selector - state selector
 */

export const useShallowEqualSelector = (selector, fallback) =>
  useSelector(
    typeof selector === "string"
      ? (state) => __get(state, selector)
      : Array.isArray(selector)
      ? (state) =>
          selector.reduce((acc, cv, key) => {
            acc.push(__get(state, cv));
            return acc;
          }, [])
      : selector,
    shallowEqual
  ) || fallback;
