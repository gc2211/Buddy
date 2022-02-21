import "styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import usersData from "data/usersData";

function UserProfile(props) {
  const {
    firstname,
    iconSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = firstname
    ? firstname
    : usersData[Math.floor(Math.random() * usersData.length)].firstname;

   
  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName ) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
         </div>
      )}
     </div>
  );
}

export default UserProfile;
 