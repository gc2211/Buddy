import {Link} from "react-router-dom";
import Nav from "../atoms/Nav";
import H2 from "../atoms/H2";

const Navbar = () => (
	<Nav>
		<H2>WELCOME TO BUDDY</H2>
			<ul>
			<li><Link to="/register">Register</Link></li>
			<li><Link to="/login">Login</Link></li>
			<li><Link to="/home">Home</Link></li> 
			<li><Link to="/map">Map</Link></li>
			<li><Link to="/profile">Profile</Link></li>
		</ul>
	</Nav>
)

export default Navbar;

///// Home could be merged with Map : Hi + name at the top , map to browse and at the bottom the log out button 