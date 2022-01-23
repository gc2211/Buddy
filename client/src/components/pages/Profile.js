import logger from "../../utils/logger";
import H2 from "../atoms/H2"

const Profile = () => (
	<main>
		<H2>Profile</H2>
		<p>The following button logs "Hello world!" to the console thanks to a function provided by /utils/logger.js</p>
		<button
			onClick={() => logger("Hello world!")}
		>
			Log
		</button>
	</main>
);

export default Profile;