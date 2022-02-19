import {Route , Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Profile from "./components/pages/Profile";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
import Login from "components/pages/Login";
import Register from "components/pages/Register";
import Footer from "./components/atoms/Footer";
import "./App.css";
 
  
const App = () => {

return (
		<div className="App">
	      	<Navbar/>
			<Switch>
		        <Route exact path="/register" component={Register}/>
 			    <Route exact path="/login" component={Login}/>
			    <Route exact path="/home" component={Home}/>
			    <Route exact path="/map" component={Map}/>
				<Route exact path="/event" component={Event}/>
				<Route exact path="/profile" component={Profile}/>
				<Route path="/*" component={Login}/>
			</Switch>
			<Footer/>
		</div>
	)
};

export default App;


 