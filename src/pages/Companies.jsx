import glassdoor from "../assets/img/companies/glassdoor.svg";
import indeed from "../assets/img/companies/indeed_logo.svg";
import linkedin from "../assets/img/companies/linkedin.svg";
import upwork from "../assets/img/companies/Upwork.svg";
import zipRecruiter from "../assets/img/companies/ZipRecruiter.svg";
import adzuna from "../assets/img/companies/adzuna.svg";
import job from "../assets/img/companies/job.com.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

const logos = [
	{ src: glassdoor, alt: "Glassdoor" },
	{ src: indeed, alt: "Indeed" },
	{ src: linkedin, alt: "LinkedIn" },
	{ src: upwork, alt: "Upwork" },
	{ src: zipRecruiter, alt: "ZipRecruiter" },
	{ src: adzuna, alt: "Adzuna" },
	{ src: job, alt: "Job.com" },
];
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
					autoplay={{ delay: 1500 }}
					breakpoints={{
						480: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 5 },
					}}
				>
					{logos.map((logo) => (
						<SwiperSlide key={logo.src}>
							<figure className="text-center">
								<img src={logo.src} alt={logo.alt} height={50} />
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Companies;
