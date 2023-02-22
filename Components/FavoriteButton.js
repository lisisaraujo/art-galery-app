import Heart from "../assets/heart.svg";

export default function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <button
      type="button"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <Heart width={50} height={50} />
    </button>
  );
}
