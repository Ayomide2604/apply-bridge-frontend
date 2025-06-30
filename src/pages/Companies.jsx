import logo1 from "../assets/img/companies/clients-logo-1.svg";
import logo2 from "../assets/img/companies/clients-logo-2.svg";
import logo3 from "../assets/img/companies/clients-logo-3.svg";
import logo4 from "../assets/img/companies/clients-logo-4.svg";
import logo5 from "../assets/img/companies/clients-logo-5.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Companies = () => {
	return (
		<section className="my-xl-9 my-5">
			<div className="container" data-cue="fadeIn">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
						<div className="text-center mb-xl-7 mb-5">
							<h2 className="mb-3">Trusted by professionals worldwide</h2>
							<p className="mb-0">
								Our clients have successfully landed jobs in top companies
								across the USA, UK, Canada, and Australia. Join a growing
								network of professionals who trust ApplyBridge to accelerate
								their international career journey.
							</p>
						</div>
					</div>
				</div>
				<Swiper
					className="swiper-container swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
					modules={[Autoplay, Pagination]}
					loop={true}
					speed={400}
					pagination={{ clickable: true, el: "swiper-pagination" }}
					spaceBetween={100}
					autoplay={{ delay: 3000 }}
					breakpoints={{
						480: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 5 },
					}}
				>
					<SwiperSlide>
						<figure className="text-center">
							<img src={logo1} alt="Company 1" />
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="text-center">
							<img src={logo2} alt="Company 2" />
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="text-center">
							<img src={logo3} alt="Company 3" />
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="text-center">
							<img src={logo4} alt="Company 4" />
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="text-center">
							<img src={logo5} alt="Company 5" />
						</figure>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Companies;
