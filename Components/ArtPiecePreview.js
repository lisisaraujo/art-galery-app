import Image from "next/image";

export default function ArtPiecePreview({ name, imageSource, artist }) {
  return (
    <>
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
    </>
  );
}
