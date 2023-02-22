import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import ArtPieces from "./pieces";
import Layout from "../Components/Layout";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);
  // const [favorites, setFavorites] = useState([]);

  const URL = "https://example-apis.vercel.app/api/art";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const pieces = data;

  function handleToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const artPiece = draft.find((piece) => piece.slug === slug);
      if (!artPiece) {
        draft.push({
          slug,
          isFavorite: true,
        });
      } else {
        artPiece.isFavorite = !artPiece.isFavorite;
        // return draft;
      }
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
