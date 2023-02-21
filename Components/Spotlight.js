import Image from "next/image";

export default function Spotlight({ name, artist, imageSource }) {
 console.log(imageSource)
    return (
    <>
      <h1>Piece of the Day</h1>
      <Image
        src={imageSource}
        alt="image of the day"
        width={200}
        height={200}
      />
      <p>
        {name} by {artist}
      </p>
    </>
  );
}
