import { useRouter } from 'next/router'
import Image from 'next/image';

export default function ShowPage({ pieces }) {
  const router = useRouter()
  const foundPiece = pieces.find(piece => piece.slug === router.query.slug)
  const { artist, colors, genre, dimensions, imageSource, name, year } = foundPiece

  return (
    <>
      <Image
        src={imageSource}
        alt="image of the day"
        width={600}
        height={600}
      // fill

      />
      <section className='paintingDetails'>
        <p>Name: {name}</p>
        <p>Artist: {artist}</p>
        <p>Genre: {genre}</p>
        <p>Year created: {year}</p>
      </section>
    </>
  );
}
