import React from "react";
import avatar from "../assets/img/avatar.png";

const DashboardHome = () => (
	<section className="py-lg-7 py-5 bg-light-subtle h-100 min-vh-100">
		<div className="container h-100">
			<div className="row h-100">
				<div className="col-lg-12 col-md-12 h-100">
					<div className="mb-4">
						<h1 className="mb-0 h3">Welcome to ApplyBridge!</h1>
					</div>
					<div className="mb-5">
						<h4 className="mb-1">Your Application Dashboard</h4>
						<p className="mb-0 fs-6">
							Track your progress, discover new opportunities, and manage your
							applications all in one place.
						</p>
					</div>
					<div className="row mb-5 g-4">
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<span>Applications Submitted</span>
									<h3 className="mb-0 mt-4">0</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<span>Interviews Scheduled</span>
									<h3 className="mb-0 mt-4">0</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<span>Offers Received</span>
									<h3 className="mb-0 mt-4">0</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<h4 className="mb-0">Next Steps</h4>
					</div>
					<div className="row g-4">
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="bx bx-search-alt-2 text-primary"
											style={{ fontSize: 24 }}
										></i>
									</div>
									<div className="mb-4">
										<h5 className="mb-2">Explore Opportunities</h5>
										<p className="mb-0 pe-xl-7">
											Browse and apply to new jobs, internships, or programs.
										</p>
									</div>
									<a
										href="#"
										className="icon-link icon-link-hover text-inherit"
									>
										Find Now <i className="bx bx-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="bx bx-upload text-success"
											style={{ fontSize: 24 }}
										></i>
									</div>
									<div className="mb-4">
										<h5 className="mb-2">Submit Application</h5>
										<p className="mb-0">
											Start a new application or update your existing ones.
										</p>
									</div>
									<a
										href="#"
										className="icon-link icon-link-hover text-inherit"
									>
										Submit <i className="bx bx-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card border-0 shadow-sm">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="bx bx-message-dots text-info"
											style={{ fontSize: 24 }}
										></i>
									</div>
									<div className="mb-4">
										<h5 className="mb-2">Check Messages</h5>
										<p className="mb-0">
											View updates and communications from organizations.
										</p>
									</div>
									<a
										href="#"
										className="icon-link icon-link-hover text-inherit"
									>
										View <i className="bx bx-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default DashboardHome;
