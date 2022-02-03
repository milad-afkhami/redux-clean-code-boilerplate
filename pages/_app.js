import React from "react";
import "../index.css";
import { Layout } from "@components/Layout";
import Router, { useRouter } from "next/router";
import { apiBaseURL } from "@config";
import { nextReduxWrapper } from "@redux/store";

function MyApp({ Component, pageProps, ...rest }) {
  const { locale, locales, defaultLocale } = useRouter();

  return (
    <Layout {...Component}>
      <Component {...pageProps} />
    </Layout>
  );
}

// https://nextjs.org/docs/advanced-features/custom-app
export default nextReduxWrapper.withRedux(MyApp);
