import Image from "next/image";
import FavoriteButton from "../Components/FavoriteButton";

export default function Spotlight({ name, artist, imageSource, slug, onToggleFavorite }) {
  console.log(imageSource);
  return (
    <div className="card">
      <h1>Piece of the Day</h1>
      <Image

        src={imageSource}
        alt="image of the day"
        width={500}
        height={500}
      />
      <p>
        {name} by {artist}
      </p>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
