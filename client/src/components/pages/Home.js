import {useContext} from 'react';
import {context} from "../../context/APIProvider";
import H2 from "../atoms/H2";

const Home = (props) => {

	const APIContext = useContext(context);

	console.log(props.APIContext);

	return (
		<main>
			<H2>Home</H2>


			{APIContext.usersIsFetched
				? <ol>
					{APIContext.usersData.data.map((user) => (
						<li key={`usersData${user.id}`}>
								<span>
									{`FIRSTNAME: ${user.firstname}`}
								</span>

							<span>
									{`LASTNAME: ${user.lastname}`}
								</span>

								<span>
									{`COUNTRY: ${user.country}`}
								</span>
								
								<span>
									{`IMAGE_URL: ${user.image_url}`}
								</span>	
						</li>
					))}
				</ol>
				: <p>loading...</p>}
		</main>
	)
};

export default Home;