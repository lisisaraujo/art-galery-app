import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "../../Components/FavoriteButton";

export default function ShowPage({ pieces, onToggleFavorite }) {
  const router = useRouter();
  const foundPiece = pieces.find((piece) => piece.slug === router.query.slug);
  const { artist, colors, genre, dimensions, imageSource, name, year, slug } =
    foundPiece;

  return (
    <>
      <Image
        src={imageSource}
        alt="image of the day"
        width={600}
        height={600}
        // fill
      />
      <section className="paintingDetails">
        <p>Name: {name}</p>
        <p>Artist: {artist}</p>
        <p>Genre: {genre}</p>
        <p>Year created: {year}</p>
      </section>
      <FavoriteButton slug={slug} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
