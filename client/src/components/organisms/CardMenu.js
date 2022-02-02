import "src/styles/cardMenu.scss";
import { ReactComponent as Inbox } from "src/images/inbox.svg";
import { ReactComponent as Comments } from "src/images/comments.svg";
import { ReactComponent as Notifications } from "src/images/notifications.svg";
import { ReactComponent as Bookmark } from "src/images/bookmark.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
