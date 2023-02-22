export default function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <button
      className="favButton"
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      Favorite
    </button>
  );
}
