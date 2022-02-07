import "styles/card.scss";
import UserProfile from "./UserProfile";
import { ReactComponent as CardButton } from "images/cardButton.svg";
  
function Card(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <div className="card">
      <header>
        <UserProfile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
     </div>
  );
}

export default Card;