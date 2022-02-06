import {Route , Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Profile from "./components/pages/Profile";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Calendars from "./components/pages/Calendars";
import Footer from "./components/atoms/Footer";
import "./App.css";

  
const App = () => {

return (
		<div className="App">
			<Navbar/>
			<Switch>
			    <Route exact path="/" component={Home}/>
			    <Route exact path="/map" component={Map}/>
				<Route exact path="/calendars" component={Calendars}/>
				<Route exact path="/profile" component={Profile}/>
				<Route path="/*" component={Home}/>
			</Switch>
			<Footer/>
		</div>
	)
};

export default App;


 