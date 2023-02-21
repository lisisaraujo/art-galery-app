export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul className="art-list">
        {pieces.map((piece) => {
          <li className="art-list-item">
            Title: {piece.name}
            Artist: {piece.artist}
          </li>;
        })}
      </ul>
    </>
  );
}
