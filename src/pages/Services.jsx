import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Services = () => {
	const rowRef = useRef(null);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		const isMobile = window.innerWidth < 768;
		if (!isMobile) return;
		const row = rowRef.current;
		if (!row) return;

		let scrollAmount = 1.5; // px per frame
		let reqId;
		let pauseTimeout;

		const scroll = () => {
			if (!isPaused) {
				const atEnd = row.scrollLeft + row.offsetWidth >= row.scrollWidth - 2;
				if (atEnd) {
					// Pause briefly at the end, then reset
					pauseTimeout = setTimeout(() => {
						row.scrollLeft = 0;
					}, 400); // 400ms pause at end
				} else {
					row.scrollLeft += scrollAmount;
					reqId = requestAnimationFrame(scroll);
				}
			} else {
				reqId = requestAnimationFrame(scroll);
			}
		};

		// Start auto-scroll
		reqId = requestAnimationFrame(scroll);

		// Pause on user interaction
		const pause = () => setIsPaused(true);
		const resume = () => setIsPaused(false);
		row.addEventListener("touchstart", pause);
		row.addEventListener("mousedown", pause);
		row.addEventListener("touchend", resume);
		row.addEventListener("mouseup", resume);

		return () => {
			cancelAnimationFrame(reqId);
			clearTimeout(pauseTimeout);
			row.removeEventListener("touchstart", pause);
			row.removeEventListener("mousedown", pause);
			row.removeEventListener("touchend", resume);
			row.removeEventListener("mouseup", resume);
		};
	}, [isPaused]);

	return (
		<section className="my-xl-9 my-5" id="services">
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
					<Swiper
						modules={[Autoplay]}
						spaceBetween={16}
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							768: { slidesPerView: 3 },
							576: { slidesPerView: 2 },
						}}
					>
						<SwiperSlide>
							<div className="col-lg-4 col-md-6" data-cue="zoomIn">
								<div className="card border-0 card-primary">
									<div className="card-body p-5">
										<div className="position-relative d-inline-block mb-5">
											<div
												className="bg-primary bg-opacity-100 rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: 80, height: 80 }}
											>
												<i
													className="bx bx-file-find text-white"
													style={{ fontSize: 40 }}
												></i>
											</div>
										</div>
										<div className="mb-5">
											<h4 className="card-title">CV Optimization</h4>
											<p className="mb-0 card-text">
												Professional CV review and enhancement to highlight your
												skills and experience. We help you create an impactful
												CV that stands out to employers and passes ATS systems.
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="col-lg-4 col-md-6" data-cue="zoomIn">
								<div className="card border-0 card-primary">
									<div className="card-body p-5">
										<div className="position-relative d-inline-block mb-5">
											<div
												className="bg-primary bg-opacity-100 rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: 80, height: 80 }}
											>
												<i
													className="bx bx-briefcase-alt text-white"
													style={{ fontSize: 40 }}
												></i>
											</div>
										</div>
										<div className="mb-5">
											<h4 className="card-title">Job Application</h4>
											<p className="mb-0 card-text">
												Personalized guidance on job search strategies,
												application timing, and targeting the right
												opportunities. We help you navigate the job market
												effectively and increase your chances of success.
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="col-lg-4 col-md-6" data-cue="zoomIn">
								<div className="card border-0 card-primary">
									<div className="card-body p-5">
										<div className="position-relative d-inline-block mb-5">
											<div
												className="bg-primary bg-opacity-100 rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: 80, height: 80 }}
											>
												<i
													className="bx bx-edit-alt text-white"
													style={{ fontSize: 40 }}
												></i>
											</div>
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
						</SwiperSlide>
					</Swiper>
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
