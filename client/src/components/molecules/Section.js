import H2 from "../atoms/H2";

const Section = (props) => {
	return (
		<section>
			<H2>{props.firstname}</H2>
			<H2>{props.lastname}</H2>
			<H2>{props.age}</H2>
			<H2>{props.country}</H2>
			<H2>{props.city}</H2>
			<H2>{props.province}</H2>
			<H2>{props.image_url}</H2>
			<H2>{props.email}</H2>
			<H2>{props.biography}</H2>
		</section>
	)
};

export default Section;