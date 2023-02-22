import ArtPiecePreview from "../Components/ArtPiecePreview";

export default function FavoriteArtPieces({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const favorites = pieces.filter((piece) => {
    return artPiecesInfo.find(
      (info) => info.slug === piece.slug && info.isFavorite
    );
  });

  return (
    <>
      <h1>Favorites</h1>

      {favorites.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            name={piece.name}
            imageSource={piece.imageSource}
            artist={piece.artist}
            favorites={favorites}
          />
        );
      })}
    </>
  );
}
