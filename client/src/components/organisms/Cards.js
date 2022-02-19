import "styles/cards.scss";
import Card from "./Card";

function Cards() {
 

  return (
    <div className="cards">

      <Card
        accountName="Shawn Lowry"
        storyBorder={true}
        image="https://nypost.com/wp-content/uploads/sites/2/2021/08/obama-birthday-golf-4.jpg?quality=80&strip=all&w=1024"
      
      />
      
      <Card
        accountName="Phil Mickelsson"
        image="https://cdn-japantimes.com/wp-content/uploads/2021/06/np_file_93743.jpeg"
         
      />
      <Card
        accountName="Jordan Spieth"
        storyBorder={true}
        image="https://www.terratrail.fr/wp-content/uploads/2019/01/distance-parcourue-golf.jpg"
         
      /> 
    <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gk30dZJskeXxmDulY42GCaw1sZXaKFQSmg&usqp=CAU" alt="business"  height="160px" width="300px"/>
      </header>
       <Card
        accountName="Tom Keipert"
        storyBorder={true}
        image="https://chesapeakegolf.com/wp-content/uploads/2014/03/GolfBuddies.jpg"
        
      /> 
      
      <Card
      accountName="Dustin Johnsson"
      storyBorder={true}
      image="https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/palm-golf-marrakech.jpg?itok=0HAcRODZ"
       
    /> 
    <Card
    accountName="Shawn Lowry"
    storyBorder={true}
    image="https://www.nouvellespublications.com/content/articles/964/main_france-golf-fd.jpg"
    
  /> 
    <header>
        <img src="https://privateclubagency.com/wp-content/uploads/2019/03/google-golf.jpg" alt="business"  height="160px" width="300px"/>
      </header>
  <Card
    accountName="Shawn Lowry"
    storyBorder={true}
    image="https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2020/02/19/5e4d6185308e1500085798bc_GD030120_FEAT_BUDDIES_16.jpg"
    
  /> 
  <Card
    accountName="Shawn Lowry"
    storyBorder={true}
    image="https://tv-fanatic-res.cloudinary.com/iu/s--B78CtnDf--/f_auto,q_auto/v1539053443/golf-buddies-magnum-pi-s1e3"
    
  /> 
   <header>
        <img src="https://www.steeplechasegolf.com/wp-content/uploads/sites/4746/2015/12/image007.jpg" alt="business"  height="230px" width="330px"/>
      </header>
  <Card
    accountName="Shawn Lowry"
    storyBorder={true}
    image="https://images.bfmtv.com/0vwDjmFG3hFjhLQ4ef8yL0cepIs=/0x40:1024x616/images/-476934.jpg"
    
  /> 

    </div>
  );
}

export default Cards;