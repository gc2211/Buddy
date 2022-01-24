import {Link} from "react-router-dom";
import Nav from "../atoms/Nav";
import H2 from "../atoms/H2";

const Navbar = () => (
	<Nav>
		<H2>WELCOME TO BUDDY</H2>
			<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/event">Event</Link></li>
			<li><Link to="/profile">Profile</Link></li>
			<li><Link to="/map">Map</Link></li>
		</ul>
	</Nav>
)

export default Navbar;