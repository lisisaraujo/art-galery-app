import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const pieces = data;

  console.log(pieces);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
