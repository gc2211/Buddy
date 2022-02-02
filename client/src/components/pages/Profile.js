import H2 from "../atoms/H2"

const Profile = (props) => (
	<main>
		<H2>Profile</H2>
		<div classname="profilepicture">
		{props.image_url}
		</div>	
		<p>Name:{props.firstname}</p>
		<p>City:{props.city}</p>
		<p align="right">Language:</p>
		<p>Biography:</p>
		<p align="right">Upcoming event:</p> 
		<p align="right">Past events:</p>
	</main>
);

export default Profile;