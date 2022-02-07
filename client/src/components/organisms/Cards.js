import "styles/cards.scss";
import Card from "./Card";

function Cards() {
 

  return (
    <div className="cards">

      <Card
        accountName="Shawn Lowry"
        storyBorder={true}
        image="https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/sport/golf/ryder-cup-de-golf-le-numero-1-mondial-espagnol-jon-rahm-suffira-t-il-pour-battre-les-americains-4067318/57634971-1-fre-FR/Ryder-Cup-de-golf-le-numero-1-mondial-espagnol-Jon-Rahm-suffira-t-il-pour-battre-les-Americains.jpg"
      
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

    </div>
  );
}

export default Cards;