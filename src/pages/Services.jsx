import service1 from "../assets/img/services/service1.jpg";
import service2 from "../assets/img/services/service2.jpg";
import service3 from "../assets/img/services/service3.jpg";

const Services = () => {
	return (
		<section className="my-xl-9 my-5">
			<div className="container" data-cue="fadeIn">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
						<div className="text-center mb-xl-7 mb-5">
							<h2 className="mb-3">Our Services</h2>
							<p className="mb-0">
								Comprehensive solutions to streamline your application process
								and enhance your career journey.
							</p>
						</div>
					</div>
				</div>
				<div className="table-responsive-lg">
					<div className="row flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
						<div className="col-lg-4 col-md-6" data-cue="zoomIn">
							<div className="card border-0 card-primary">
								<div className="card-body p-5">
									<div className="position-relative d-inline-block mb-5">
										<img
											src={service1}
											alt="CV Optimization"
											className="avatar avatar-xl rounded-circle border-2 border border-white shadow-sm"
										/>
									</div>
									<div className="mb-5">
										<h4 className="card-title">CV Optimization</h4>
										<p className="mb-0 card-text">
											Professional CV review and enhancement to highlight your
											skills and experience. We help you create an impactful CV
											that stands out to employers and passes ATS systems.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-cue="zoomIn">
							<div className="card border-0 card-primary">
								<div className="card-body p-5">
									<div className="position-relative d-inline-block mb-5">
										<img
											src={service2}
											alt="Job Application"
											className="avatar avatar-xl rounded-circle border-2 border border-white shadow-sm"
										/>
									</div>
									<div className="mb-5">
										<h4 className="card-title">Job Application</h4>
										<p className="mb-0 card-text">
											Personalized guidance on job search strategies,
											application timing, and targeting the right opportunities.
											We help you navigate the job market effectively and
											increase your chances of success.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-cue="zoomIn">
							<div className="card border-0 card-primary">
								<div className="card-body p-5">
									<div className="position-relative d-inline-block mb-5">
										<img
											src={service3}
											alt="Cover Letter & Statement Writing"
											className="avatar avatar-xl rounded-circle border-2 border border-white shadow-sm"
										/>
									</div>
									<div className="mb-5">
										<h4 className="card-title">
											Cover Letter & Statement Writing
										</h4>
										<p className="mb-0 card-text">
											Expertly crafted cover letters and personal statements
											tailored to your target roles, helping you make a strong
											first impression with employers.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-6" data-cue="fadeIn">
					<div className="col-xl-10 offset-xl-1">
						<ul className="list-inline">
							<li className="list-inline-item d-inline-flex align-items-center me-3 mb-2 mb-lg-0">
								<span className="ms-2">Expert Guidance & Feedback</span>
							</li>
							<li className="list-inline-item d-inline-flex align-items-center me-3 mb-2 mb-lg-0">
								<span className="ms-2 me-3">
									Personalized support and actionable feedback throughout your
									job search journey.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
