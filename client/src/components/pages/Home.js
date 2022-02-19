import "styles/App.scss";
import Cards from "components/organisms/Cards";
 
function Home() {  
    return (    
    <div className="App">      
    <main>        
      <div className="container">  
       <Cards />          
       </div>      
    </main>    
    </div>  
    );
}
export default Home;