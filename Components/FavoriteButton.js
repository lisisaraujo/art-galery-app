import Heart from "../assets/heart.svg";

export default function FavoriteButton({
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  return (
    <button
      className="favButton"
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <Heart width={50} height={50} />
    </button>
  );
}
