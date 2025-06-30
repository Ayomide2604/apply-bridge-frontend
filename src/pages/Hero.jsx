import hero from "../assets/img/hero.jpg";

const Hero = () => {
	return (
		<section
			className="bg-primary-dark pt-9 right-slant-shape"
			data-cue="fadeIn"
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-12">
						<div
							className="text-center text-lg-start mb-7 mb-lg-0"
							data-cues="slideInDown"
						>
							<div className="mb-4">
								<h1 className="mb-5 display-5 text-white-stable">
									Find Your{" "}
									<span className="text-pattern-line text-warning">
										Dream Job
									</span>{" "}
									in the USA, UK, Canada, or Australia
								</h1>
								<p className="mb-0 text-white-stable lead">
									We simplify job applications for professionals seeking
									opportunities abroad. Get expert CV writing, cover letter
									preparation, and personalized application support for roles in
									the USA, UK, Canada, and Australia.
								</p>
							</div>
							<div data-cues="slideInDown">
								<a href="#" className="btn btn-primary me-2">
									Get Started
								</a>
								<a href="#contact" className="btn btn-outline-warning">
									Contact Us
								</a>
							</div>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-6 col-12">
						<div
							className="position-relative z-1 pt-lg-9"
							data-cue="slideInRight"
						>
							<div className="position-relative">
								<img
									src={hero}
									alt="Find Your Dream Job"
									className="img-fluid rounded-3"
									width={837}
								/>
								<a
									href="https://www.youtube.com/watch?v=CivuutI6lXY"
									className="play-btn glightbox position-absolute top-50 start-50 translate-middle icon-shape icon-xl rounded-circle text-primary"
								>
									<i className="bi bi-play-fill" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
