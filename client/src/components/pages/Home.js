import "styles/App.scss";
import Cards from "components/organisms/Cards";
import Sidebar from "components/organisms/Sidebar";

function Home() {  
    return (    
    <div className="App">      
    <main>        
      <div className="container">  
       <Cards />          
       <Sidebar />        
      </div>      
    </main>    
    </div>  
    );
}
export default Home;