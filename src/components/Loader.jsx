import React from "react";
import "../assets/css/loader.css";
import logo from "../assets/img/logo.svg";

const Loader = () => (
	<div className="fancy-loader-overlay">
		<div className="fancy-loader-container">
			{logo ? (
				<img src={logo} alt="Loading Logo" className="fancy-loader-logo" />
			) : (
				<div className="fancy-loader-logo-placeholder" />
			)}
		</div>
	</div>
);

export default Loader;
