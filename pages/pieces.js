import ArtPiecePreview from "../Components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  // const piecesArr = pieces.map((piece) => piece);
  console.log("peices array", pieces);

  return (
    <>
      <h1>Pieces of Art</h1>

      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            name={piece.name}
            imageSource={piece.imageSource}
            artist={piece.artist}
          />
        );
      })}
    </>
  );
}
