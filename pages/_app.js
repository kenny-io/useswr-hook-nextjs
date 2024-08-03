import { SWRConfig } from "swr";
import "../styles/globals.css";
import axios from "axios";
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (url) => await axios.get(url).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
