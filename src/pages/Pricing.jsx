import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const plans = [
	{
		name: "Basic Plan",
		price: "₦100,000",
		description:
			"Perfect for job seekers beginning their international application journey. Includes essential support and a generous number of applications.",
		features: [
			"200 Applications",
			"Professional CV review",
			"Personalized job application assistance",
			"Priority Email and chat support",
		],
		cta: {
			text: "Subscribe Now",
			link: "https://paystack.shop/pay/go0pwoj6ci",
		},
		badge: "",
	},
	{
		name: "Pro Plan",
		price: "₦150,000",
		description:
			"Ideal for active job seekers who want more applications and advanced support to maximize their chances.",
		features: [
			"300 Applications",
			"Professional CV & cover letter review",
			"Personalized job application assistance",
			"Priority email & chat support",
		],
		cta: {
			text: "Subscribe Now",
			link: "https://paystack.shop/pay/ebgkwbv0e4",
		},
		badge: "Most Popular",
	},
	{
		name: "Premium Plan",
		price: "₦200,000",
		description:
			"For serious professionals seeking the highest level of support, maximum applications, and premium services.",
		features: [
			"400 Applications",
			"Premium CV, cover letter & LinkedIn review",
			"Dedicated job application manager",
			"24/7 priority support",
		],
		cta: {
			text: "Subscribe Now",
			link: "https://paystack.shop/pay/-2bwy3wk9f",
		},
		badge: "",
	},
];

const Pricing = () => {
	const [activeIdx, setActiveIdx] = useState(1);
	return (
		<>
			<div className="pattern-square" />
			{/*Pageheader start*/}
			<section className="py-5 py-lg-8">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 col-md-12 col-12">
							<div className="text-center">
								<h1 className="mb-1 mb-lg-3">Get Started Today</h1>
								<p className="mb-0">Pick Your Perfect Plan</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Pageheader end*/}
			{/*Pricing start*/}
			<section className="pt-4 mt-lg-n8">
				<div className="container price-wrapper">
					<div className="table-responsive-xl">
						<div className="row flex-nowrap pb-4 me-5 me-lg-0">
							{plans.map((plan, idx) => (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-12"
									key={plan.name}
								>
									{/*card*/}
									<div
										className={`card${
											activeIdx === idx ? " bg-dark border-0" : " pricing"
										}`}
										onClick={() => setActiveIdx(idx)}
										style={{ cursor: "pointer" }}
									>
										<div
											className={`card-body${
												activeIdx === idx ? " text-white" : ""
											}`}
										>
											{plan.badge && (
												<span className="badge text-bg-warning text-uppercase mb-6 d-block py-2">
													{plan.badge}
												</span>
											)}
											<h1
												className={`mb-4 h2${
													activeIdx === idx ? " text-white" : ""
												}`}
											>
												{plan.price}
											</h1>
											<div className="mb-6">
												<h2
													className={`h3${
														activeIdx === idx ? " text-white" : ""
													}`}
												>
													{plan.name}
												</h2>
												<p
													className={`mb-0${
														activeIdx === idx ? " text-white" : ""
													}`}
												>
													{plan.description}
												</p>
											</div>
											<ul className="list-unstyled mb-0">
												{plan.features.map((feature, i) => (
													<li
														className="mb-2 d-flex align-items-center"
														key={i}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															fill="currentColor"
															className={`bi bi-check-circle-fill${
																activeIdx === idx
																	? " text-body"
																	: " text-success"
															}`}
															viewBox="0 0 16 16"
														>
															<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
														</svg>
														<span className="ms-3">{feature}</span>
													</li>
												))}
											</ul>
											<div className="d-grid mt-6">
												<a
													href={plan.cta.link}
													className="btn btn-primary"
													target="_blank"
													rel="noopener noreferrer"
												>
													{plan.cta.text}
												</a>
											</div>
										</div>
									</div>
									{/*card*/}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/*Pricing end*/}
		</>
	);
};

export default Pricing;
