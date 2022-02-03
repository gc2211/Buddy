import "styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "Jon Rahm",
      text: "Serious business!",
      id: 1,
    },
    {
      user: "Collin Morikawa",
      text: "Love it!",
      id: 2,
    },
    {
      user: "Dustin Johnsson",
      text: "Triple bogey?",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "Justin Rose",
      text: "Amazing pic!🔥",
      id: 4,
    },
    {
      user: "Patrick Reed",
      text: "What a swing bud!",
      id: 5,
    },
    {
      user: "Bryson DeChambeau",
      text: "Which golf?",
      id: 6,
    },
  ];

  const commentsThree = [
    {
      user: "Adam Scott",
      text: "Wanna play a round with me soon?",
      id: 7,
    },
    {
      user: "Patrick Cantlay",
      text: "What a view!",
      id: 8,
    },
    {
      user: "Rory Mckilroy",
      text: "Were you playing with @Justin Rose?",
      id: 9,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="Jon Rahm"
        storyBorder={true}
        image="https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/sport/golf/ryder-cup-de-golf-le-numero-1-mondial-espagnol-jon-rahm-suffira-t-il-pour-battre-les-americains-4067318/57634971-1-fre-FR/Ryder-Cup-de-golf-le-numero-1-mondial-espagnol-Jon-Rahm-suffira-t-il-pour-battre-les-Americains.jpg"
        comments={commentsOne}
        likedByText="Adam Scott"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="Phil Mickelsson"
        image="https://cdn-japantimes.com/wp-content/uploads/2021/06/np_file_93743.jpeg"
        comments={commentsTwo}
        likedByText="Dustin Johnsson"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="Jordan Spieth"
        storyBorder={true}
        image="https://www.terratrail.fr/wp-content/uploads/2019/01/distance-parcourue-golf.jpg"
        comments={commentsThree}
        likedByText="Justin Rose"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;