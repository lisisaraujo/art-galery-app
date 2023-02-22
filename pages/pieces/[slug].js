import { useRouter } from 'next/router'
import Image from 'next/image';
import CommentForm from "../../Components/CommentForm";
import FavoriteButton from "../../Components/FavoriteButton";
import styled from 'styled-components'

export default function ShowPage({ pieces, artPiecesInfo, updateArtPiecesInfo, onToggleFavorite }) {
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
      let currentPiece = draft.defaultValue.find(piece => piece.slug === slug)
      if (!currentPiece) {

        draft.push(
          {
            slug,
            isFavorite: false,
            comments: [commentAndDate],
          }
        )
      } else {
        currentPiece.comments = [commentAndDate, ...currentPiece.comments];
      }
    })
    event.target.reset()
    const input = document.getElementById('comment')
    input.focus()
  }


  const currentInfo = artPiecesInfo.defaultValue.find(piece => {
    return (piece.slug === slug)
  })


  return (
    <Container>
      <ImageContainer>
        <Image
          src={imageSource}
          alt="image of the day"
          width={600}
          height={600}
        // fill
        />
      </ImageContainer>
      <ColorsContainer>
        {colors.map((color) => {
          return (
            <>
              <ColorDiv key={color} style={{ backgroundColor: color }}>
                {color}
              </ColorDiv>

            </>

          );
        })}

      </ColorsContainer>
      <section className="paintingDetails">
        <p>Name: {name}</p>
        <p>Artist: {artist}</p>
        <p>Genre: {genre}</p>
        <p>Year created: {year}</p>
      </section>
      <FavoriteButton slug={slug} onToggleFavorite={onToggleFavorite} />
      <CommentForm onSubmitComment={handleSubmitComment} />
      {currentInfo &&
        currentInfo.comments.map((comment, index) => {
          return (
            <div className='commentCard' key={index}>
              <p className='date'>{comment.date}</p>
              <p className='comment'>{comment.comment}</p>
            </div>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;

`;

const ColorDiv = styled.div`
  background-color: #fff;
  flex-grow: 1;
  color: #000;
  padding: 10px;
  font-size: 0.7rem;
  height: 30px;
  /* color: rgb(60, 60, 60); */
`;
