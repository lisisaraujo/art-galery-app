import ArtPiecePreview from "../Components/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  // const piecesArr = pieces.map((piece) => piece);
  // console.log("pieces array", pieces);

  return (
    <div className="centered-content">
      <h1>Pieces of Art</h1>

      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            name={piece.name}
            imageSource={piece.imageSource}
            artist={piece.artist}
          />
        );
      })}
    </div>
  );
}
