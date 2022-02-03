import {Route , Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Profile from "./components/pages/Profile";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import Footer from "./components/atoms/Footer";
import "./App.css";

  
const App = () => {

	return (
		<div className="App">
			<Navbar/>
			<Switch>
			    <Route path="/home" component={Home}/>
			    <Route path="/map" component={Map}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/events" component={Events}/>
			</Switch>
			<Footer/>
		</div>
	)
};

export default App;


 