import Spotlight from "../Components/Spotlight";

export default function HomePage({ pieces }) {
  const array = ["one", "two", "three"];
  console.log(pieces);
  function randomArtwork(pieces) {
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

    return randomPiece;
  }
  const randomPiece = randomArtwork(pieces);
  console.log(randomPiece);
  // we need artist, name, imageSource
  return (
    <Spotlight
      name={randomPiece.name}
      artist={randomPiece.artist}
      imageSource={randomPiece.imageSource}
    />
  );
}
