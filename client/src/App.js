import {Route, Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
import Profile from "./components/pages/Profile";
import Footer from "./components/organisms/Footer";

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
			</Switch>

			<Footer/>
		</>
	)
};

export default App;
