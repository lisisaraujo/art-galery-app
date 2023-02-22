import { useRouter } from 'next/router'
import Image from 'next/image';
import CommentForm from "../../Components/CommentForm";
import FavoriteButton from "../../Components/FavoriteButton";

export default function ShowPage({ pieces, artPiecesInfo, updateArtPiecesInfo,onToggleFavorite }) {
  const router = useRouter()
  const foundPiece = pieces.find(piece => piece.slug === router.query.slug)
  const { artist, colors, genre, dimensions, imageSource, name, year, slug } = foundPiece;

  const handleSubmitComment = (event) => {
    event.preventDefault()
    const date = new Date().toLocaleString()
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    const commentAndDate = { ...formDataObj, date: date }

    updateArtPiecesInfo(draft => {
      let currentPiece = draft.find(piece => piece.slug === slug)
      if (!currentPiece) {
        return [
          ...draft, {
            slug,
            isFavorite: false,
            comments: [commentAndDate],
          }
        ]
      } else {
        currentPiece.comments = [commentAndDate, ...currentPiece.comments];
      }
    })
  }

  const currentInfo = artPiecesInfo.find(piece => {
    return (piece.slug === slug)
  })


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
      <CommentForm onSubmitComment={handleSubmitComment} />
      {currentInfo && currentInfo.comments.map((comment, index) => {
        return (
          <div key={index}>
            <p>{comment.comment}</p>
            <p>{comment.date}</p>
          </div>
        )
      })}

    </>
  );
}
