import Heart from "../assets/heart.svg";
import ArtPiecePreview from "./ArtPiecePreview";

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
  return (
    <button
      className={isFavorite ? "filled" : "favButton"}
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <Heart width={50} height={50} />
    </button>
  );
}
