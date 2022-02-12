import "styles/card.scss";
import UserProfile from "./UserProfile";
  
function Card(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <div className="card">
      <header>
        <UserProfile iconSize="medium" storyBorder={storyBorder} />
      </header>
      <img className="cardImage" src={image} alt="card content" />
     </div>
  );
}

export default Card;