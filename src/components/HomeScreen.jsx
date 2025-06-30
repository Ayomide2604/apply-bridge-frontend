import React from "react";
import Hero from "../pages/Hero";
import Companies from "../pages/Companies";
import Services from "../pages/Services";
import GetStarted from "../pages/GetStarted";

const HomeScreen = () => {
	return (
		<>
			<Hero />
			<Companies />
			<Services />
			<GetStarted />
		</>
	);
};

export default HomeScreen;
