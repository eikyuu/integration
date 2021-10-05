import React from "react";
import GlobalStyles from "../styles/global/GlobalStyles";


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
        <GlobalStyles />
        <Component {...pageProps} />
    </React.Fragment>
);
}

export default MyApp;
