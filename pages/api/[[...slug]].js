import { externalApiBaseURL, headerTokenKey } from "@config";
import { endpoints, LOCALE_COOKIE_KEY, TOKEN_COOKIE_KEY } from "@constants";
import { Cookies, fetch, Http, __omit, __pick } from "@utils";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  console.log({ req, res });

  const token =
    req.cookies[TOKEN_COOKIE_KEY] ||
    "1624442512967_VQg90DurYL1tMT8BWUSqlIaWc46FLTudk9lHkdJ2xG4=";
  const locale = req.cookies[LOCALE_COOKIE_KEY] || "en";

  try {
    // const response = await fetch({
    //   ...__pick(req, ["method", "body"]),
    //   baseURL: "localhost:5700/",
    //   endpoint: "home/index",
    //   headers: {
    //     ...req.headers,
    //     ...(token ? { token } : {}),
    //     ...(locale ? { locale } : {}),
    //   },
    // });

    const response = await Http[req.method.toLowerCase()]({
      ...__pick(req, ["method", "body"]),
      baseURL: externalApiBaseURL,
      // url: req.url.replace("/api", ""),
      url: "/".concat(req.query.slug.join("/")),
      headers: {
        ...req.headers,
        [headerTokenKey]: token,
        locale,
      },
    });

    console.log({ response });

    // return res.status(200).json(__omit(response, ["request"]));
    return res.status(200).send(response.data);
  } catch (error) {
    console.log({ error });
    throw res
      .status(500)
      .send({ code: error?.code || 500, message: error.toString(), ...error });
  }
}
