import "styles/cards.scss";
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
    const commentsFour = [
      {
        user: "Martin Hovland",
        text: "New buddies?",
        id: 10,
      },
      {
        user: "Brooks Koepka",
        text: "Is this Pierre?",
        id: 11,
      },
      {
        user: "Jack Na",
        text: "Where did you play?",
        id: 12,
      },
    ];
      const commentsFive = [
        {
          user: "Kevin Li",
          text: "Nice shot!",
          id: 13,
        },
        {
          user: "Patrick Cantlay",
          text: "I hate bunkers!!",
          id: 14,
        },
        {
          user: "Rory Mckilroy",
          text: "Early morning?",
          id: 15,
        },
      ];
        const commentsSix = [
          {
            user: "Ian Poulter",
            text: "Did it go in?",
            id: 16,
          },
          {
            user: "Thomas Pieters",
            text: "Drop it like it's hot!",
            id: 17,
          },
        
  ];

  return (
    <div className="cards">

      <Card
        accountName="Shawn Lowry"
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
       <Card
        accountName="Tom Keipert"
        storyBorder={true}
        image="https://chesapeakegolf.com/wp-content/uploads/2014/03/GolfBuddies.jpg"
        comments={commentsFour}
        likedByText="Bryson deChambeau "
        likedByNumber={17}
        hours={1}
      /> 
      <Card
      accountName="Dustin Johnsson"
      storyBorder={true}
      image="https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/palm-golf-marrakech.jpg?itok=0HAcRODZ"
      comments={commentsFive}
      likedByText="Justin Thomas"
      likedByNumber={123}
      hours={2}
    /> 
    <Card
    accountName="Shawn Lowry"
    storyBorder={true}
    image="https://www.nouvellespublications.com/content/articles/964/main_france-golf-fd.jpg"
    comments={commentsSix}
    likedByText="Tommy Fleetwood"
    likedByNumber={9}
    hours={5}
  /> 

    </div>
  );
}

export default Cards;