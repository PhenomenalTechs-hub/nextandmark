import "../styles/globals.css";
import "../styles/styles.scss";
import Head from "next/head";
import HeadScript from "../components/HeadScript";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadScript />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
