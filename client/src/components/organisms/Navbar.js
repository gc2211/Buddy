import {Link} from "react-router-dom";
import H3 from "../atoms/H3";
import Nav from "../atoms/Nav";

const Navbar = () => (
	<Nav>
		<H3>WELCOME TO BUDDY</H3>
			<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/event">Event</Link></li>
			<li><Link to="/profile">Profile</Link></li>
		</ul>
	</Nav>
)

export default Navbar;