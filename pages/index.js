import Spotlight from "../Components/Spotlight";

export default function HomePage({ pieces }) {
  const array = ["one", "two", "three"];

  function randomArtwork(pieces) {
    const number = pieces[Math.floor(Math.random() * pieces.length)];
    const randomPiece = pieces[number];
    return randomPiece;
  }
  const randomPiece = randomArtwork(pieces);
// we need artist, name, imageSource
  return <Spotlight name={randomPiece.name} artist={randomPiece.artist} imageSource={randomPiece.imageSource}/>;
}
