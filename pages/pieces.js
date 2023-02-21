export default function ArtPieces({ pieces }) {
  const piecesArr = pieces.map((piece) => piece.name);
  console.log(piecesArr);

  return (
    <>
      {/* <ul className="art-list">
        {pieces.map((piece) => {
          <li className="art-list-item">
            Title: {piece.name}
            Artist: {piece.artist}
          </li>;
        })}
      </ul> */}
    </>
  );
}
