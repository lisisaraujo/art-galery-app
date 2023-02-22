import ArtPiecePreview from "../Components/ArtPiecePreview";

export default function FavoriteArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <h1>Favorites</h1>

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
    </>
  );
}
