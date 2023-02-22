import { useEffect, useState } from "react";
import FavoriteButton from "../Components/FavoriteButton";
import Spotlight from "../Components/Spotlight";


export default function HomePage({ onToggleFavorite, pieces }) {
  const [randomPiece, setRandomPiece] = useState({});

  useEffect(() => {
    function randomArtwork(pieces) {
      setRandomPiece(pieces[Math.floor(Math.random() * pieces.length)]);
    }
    randomArtwork(pieces);
  }, []);

  return (
    <>
      <Spotlight
        name={randomPiece.name}
        artist={randomPiece.artist}
        imageSource={randomPiece.imageSource}
        slug={randomPiece.slug}
        onToggleFavorite={onToggleFavorite}
      />
      {/* <FavoriteButton
        slug={randomPiece.slug}
        onToggleFavorite={onToggleFavorite}
      /> */}
    </>
  );
}
