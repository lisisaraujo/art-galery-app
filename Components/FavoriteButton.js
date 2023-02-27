import Heart from "../assets/heart.svg";

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
  isFavorite ? (className = "favButton") : (className = "favButton filled");
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
