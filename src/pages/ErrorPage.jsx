import planet from "../assets/img/error/planet.svg";
import error404 from "../assets/img/error/404.svg";
import astronaut from "../assets/img/error/astronaut.svg";
import globe from "../assets/img/error/globe.svg";
import rocket from "../assets/img/error/rocket.svg";
import stars from "../assets/img/error/stars.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="container d-flex flex-column overflow-hidden">
			<div className="row align-items-center justify-content-center min-vh-100 text-center">
				<div className="col-lg-6 col-12">
					<div className="position-relative mb-7">
						<div className="scene d-none d-lg-block" data-relative-input="true">
							<div className="position-absolute top-0" data-depth="0.5">
								<img src={stars} alt="" />
							</div>
						</div>
						<div className="scene d-none d-lg-block" data-relative-input="true">
							<div className="position-absolute" data-depth="0.1">
								<img src={rocket} alt="" />
							</div>
						</div>
						<div className="scene d-none d-lg-block" data-relative-input="true">
							<div
								className="position-absolute top-0 start-50 translate-middle"
								style={{ marginTop: "-80px", marginLeft: "-80px" }}
								data-depth="0.1"
							>
								<img src={globe} alt="" />
							</div>
						</div>
						<div className="scene d-none d-lg-block" data-relative-input="true">
							<div className="position-absolute start-50" data-depth="0.1">
								<img
									src={astronaut}
									alt=""
									style={{ top: "-110px", position: "absolute", bottom: 0 }}
								/>
							</div>
						</div>
						<div className="position-relative z-n1">
							<img src={error404} alt="" className="img-fluid" />
						</div>
						<div className="scene d-none d-lg-block" data-relative-input="true">
							<div
								className="position-absolute start-100 bottom-0"
								data-depth="0.1"
							>
								<img src={planet} alt="" />
							</div>
						</div>
					</div>
					<div className="position-relative" style={{ zIndex: 10 }}>
						<h2>Oops page not found</h2>
						<p>The page you are looking for is not available.</p>
						<Link to="/" className="btn btn-primary cursor-pointer">
							Go back to home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
