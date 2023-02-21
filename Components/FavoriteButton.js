export default function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <button
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      Favorite
    </button>
  );
}
