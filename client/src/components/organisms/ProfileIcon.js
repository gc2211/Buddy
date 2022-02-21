import "styles/profileIcon.scss";
import usersData from "data/usersData";
  
  function ProfileIcon(props) {
    const {
      iconSize,
      storyBorder,
      image,
    } = props;
  
 
    let accountImage = image
    ? image
    : usersData[Math.floor(Math.random() * usersData.length)].image_url;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        className={`profileIcon ${iconSize}`}
        src={accountImage}
        alt="profile"
      />
    </div>
  );
}

export default ProfileIcon;

 