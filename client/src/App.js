import {Route, Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
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
				<Route exact path="/" component={Home}/>
				<Route path="/event" component={Event}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/map" component={Map}/>
			</Switch>

		</>
	)
};

export default App;

/*
	1. Delete all the pages, organisms, molecules and atoms that you are not going to use
	2. Create a new page (if atomic design also necessary organisms, molecules and atoms) for the mapbox component
	3. Put the page in the router switch etc.
	4. Stage commit and push.
	5. If you are deploying via Github, that's it. But if deploying from the CLI then `$ git push heroku main`
/*

/*
	1. Delete the routes that you don't need
	2. Create the routes that you do need
	3. With Postman make sure that the routes are working
	4. Implement the UI components in the frontend (create pages, atoms, etc. as you need)
	5. Stage commit and push.
	6. If you are deploying via Github, that's it. But if deploying from the CLI then `$ git push heroku main`
*/