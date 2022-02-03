import { __get } from "@utils";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export class Cookies {
  /**
   * Parses cookies.
   *
   * @param name The name of your cookie.
   * @param ctx NextJS page or API context, express context, null or undefined.
   * @param options Options that we pass down to parseCookies method of `cookie` library.
   */
  static get = (name, ctx = null, options) => __get(parseCookies(ctx), name);

  /**
   * Sets a cookie.
   *
   * @param ctx NextJS page or API context, express context, null or undefined.
   * @param name The name of your cookie.
   * @param value The value of your cookie.
   * @param options Options that we pass down to `cookie` library.
   */
  static set = (
    ctx,
    name,
    value,
    options = { maxAge: 30 * 24 * 60 * 60, path: "/" }
  ) => setCookie(ctx, name, value, options);

  static remove = (ctx, key, options = { path: "/" }) =>
    destroyCookie(ctx, key, options);
}
