import {useContext} from 'react';
import {context} from "../../context/APIProvider";

const Home = (props) => {

	const APIContext = useContext(context);

	console.log(props.APIContext);

	return (
		<main>
            <img src='../public/buddy.png' alt='logo'></img>

			{APIContext.usersIsFetched
				? <ol>
					{APIContext.usersData.data.map((user) => (
						<li key={`usersData${user.id}`}>
								<span>
									{`FIRSTNAME: ${user.firstname}`}
								</span>	,
								<span>
									{`LASTNAME: ${user.lastname}`}
								</span> ,
								<span>
									{`COUNTRY: ${user.country}`}
								</span> ,
								<span>
									{`IMAGE_URL: ${user.image_url}`}
								</span>	
						</li>
					))}
				</ol>
				: <p>loading...</p>}
				<div id="map"></div>
		</main>
	)	
};

export default Home;