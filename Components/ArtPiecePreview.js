import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ name, imageSource, artist, slug }) {
  return (
    <Link href={`pieces/${slug}`} >
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
    </Link >
  );
}
