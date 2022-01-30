import {Route, Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Profile from "./components/pages/Profile";
import Map from "./components/pages/Map";
  
const App = () => {

	return (
		<>
			<header>
				<h1>Buddy</h1>
			</header>

			<Navbar/>

			<Switch>
				<Route path="/profile" component={Profile}/>
				<Route path="/map" component={Map}/>
			</Switch>

		</>
	)
};

export default App;


 