import Image from "next/image";
import Link from "next/link";

import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  name,
  imageSource,
  artist,
  slug,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={`pieces/${slug}`}>
        <div className="art-list-item">
          <Image
            src={imageSource}
            alt="image of the day"
            width={400}
            height={200}
          />
          <p>
            &quot;{name}&quot; by {artist}
          </p>
        </div>
      </Link>
      <FavoriteButton slug={slug} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
