import ArrowSvg from "../components/ArrowSvg";
const GetStarted = () => {
	return (
		<section className="my-xl-7 py-5">
			<div className="container" data-cue="fadeIn">
				<div className="row">
					<div className="col-lg-8 offset-lg-2" data-cue="fadeIn">
						<div className="mb-xl-7 mb-5 text-center">
							<h2 className="mb-3">Get Started with ApplyBridge</h2>
							<p className="mb-0">
								Take the first step towards your international career. Our
								process is simple and designed to help you succeed in your job
								search abroad.
							</p>
						</div>
					</div>
				</div>
				<div className="table-responsive-xl">
					<div className="row pb-4 pb-lg-0 me-5 me-lg-0">
						<div
							className="col-lg-4 col-md-6 col-12 mb-4"
							data-cue="slideInLeft"
						>
							<div className="p-xl-5">
								<div className="d-flex align-items-center justify-content-between mb-5">
									<div className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">
										1
									</div>
									<ArrowSvg className="d-none d-lg-block" />
								</div>
								<h3 className="h4">Contact Us</h3>
								<p className="mb-0">
									Reach out to our team for a free consultation and let us know
									your career goals and target countries.
								</p>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6 col-12 mb-4"
							data-cue="slideInLeft"
						>
							<div className="p-xl-5">
								<div className="d-flex align-items-center justify-content-between mb-5">
									<div className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">
										2
									</div>
									<ArrowSvg className="d-none d-lg-block" />
								</div>
								<h3 className="h4">Get Personalized Support</h3>
								<p className="mb-0">
									We'll review your CV, discuss your needs, and recommend the
									best services to maximize your chances of success.
								</p>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6 col-12 mb-4"
							data-cue="slideInLeft"
						>
							<div className="p-xl-5">
								<div className="d-flex align-items-center justify-content-between mb-5">
									<div className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">
										3
									</div>
									<ArrowSvg className="d-none d-lg-block" />
								</div>
								<h3 className="h4">Start Your Application Journey</h3>
								<p className="mb-0">
									Work with our experts to prepare your documents and submit
									applications to your chosen destinations.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12" data-cue="zoomIn">
						<div className="text-center my-5">
							<a href="#contact" className="btn btn-outline-primary">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
