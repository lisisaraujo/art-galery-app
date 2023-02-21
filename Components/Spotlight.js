export default function Spotlight({ name, artist, imageSource }) {
  return (
    <>
      <h1>Piece of the Day</h1>
      <img src={imageSource} alt="image of the day" />
      <p>
        "{name}" by {artist}
      </p>
    </>
  );
}
