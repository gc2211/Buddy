import {useContext} from 'react';
import {context} from "../../context/APIProvider";
import {nanoid} from "nanoid";
import H2 from "../atoms/H2";
import Section from "../molecules/Section";
import textData from "../../data/textData";

const Home = (props) => {

	const APIContext = useContext(context);

	console.log(props.history)

	return (
		<main>
			<H2>Home</H2>

			<Section
				firstname={textData.Users1.firstname}
				lastname={textData.Users1.lastname}
			/>

			<Section
				age={textData.User1.age}
				country={textData.User1.country}
			/>

			{APIContext.usersIsFetched
				? <ol>
					{APIContext.usersData.data.map((element) => (
						<li key={nanoid()}>
								<span>
									{`FIRSTNAME: ${element.firstname} - `}
								</span>
							<span>
									{`LASTNAME: ${element.lastname}`}
								</span>
						</li>
					))}
				</ol>
				: <p>loading...</p>}

		</main>
	)
};

export default Home;