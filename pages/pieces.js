export default function ArtPieces({ pieces }) {
  // const piecesArr = pieces.map((piece) => piece);
  console.log("peices array", pieces);

  return (
    <>
      <h1>Pieces</h1>
      <ul className="art-list">
        {pieces.map((piece) => {
          return (
            <li className="art-list-item" key={piece.slug}>
              Title: {piece.name}
              Artist: {piece.artist}
            </li>
          );
        })}
      </ul>
    </>
  );
}
