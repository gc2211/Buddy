import {Route , Switch} from "react-router-dom";
import Navbar from "components/organisms/Navbar";
import Profile from "components/pages/Profile";
import Map from "components/pages/Map";
import Home from "components/pages/Home";
import Event from "components/pages/Event";
import Login from "components/pages/Login";
import Register from "components/pages/Register";
import Footer from "./components/atoms/Footer";
import ForgotPassword from "components/pages/ForgotPassword";
import {AuthProvider} from "context/AuthContext";
import PrivateRoute from "components/pages/PrivateRoute";
import "./App.css";
 
  
const App=()=>{

return (
 
		<div className="App">
			<AuthProvider>
			<Navbar/>
			<Switch>
		        <Route exact path="/register" component={Register}/>
 			    <Route exact path="/login" component={Login}/>
				<Route exact path="/forgot-password" component={ForgotPassword}/>
				<PrivateRoute path="/home" component={Home} />
				<PrivateRoute path="/map" component={Map}  />
				<PrivateRoute path="/event" component={Event} />
				<PrivateRoute path="/profile" component={Profile}/>
				<Route path="/*" component={Register}/>
			</Switch>
			</AuthProvider>
			<Footer/>
		</div>
	)
};

export default App;


 