import "styles/suggestions.scss";
import UserProfile from "./UserProfile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <UserProfile
        caption="Followed by Justin Rose + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <UserProfile
        caption="Followed by Jon Rahm + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <UserProfile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <UserProfile
        caption="Followed by Dustin Johnsson + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <UserProfile
        caption="Followed by Phil Mickelsson + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;