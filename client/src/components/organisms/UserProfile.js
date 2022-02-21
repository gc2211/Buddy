import "styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import usersData from "data/usersData";

function UserProfile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = username
    ? username
    : usersData[Math.floor(Math.random() * usersData.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default UserProfile;
