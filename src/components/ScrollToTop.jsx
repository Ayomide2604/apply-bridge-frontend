import React, { useEffect, useRef, useState } from "react";

const ScrollToTop = () => {
	const [active, setActive] = useState(false);
	const pathRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const docHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress = docHeight
				? 139.989 - (scrollTop * 139.989) / docHeight
				: 139.989;
			if (pathRef.current) {
				pathRef.current.style.strokeDashoffset = progress;
			}
			setActive(scrollTop > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={`btn-scroll-top${active ? " active-progress" : ""}`}
			onClick={scrollToTop}
			style={{ cursor: "pointer" }}
		>
			<svg
				className="progress-square svg-content"
				width="100%"
				height="100%"
				viewBox="0 0 40 40"
			>
				<path
					ref={pathRef}
					d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"
					style={{
						transition: "stroke-dashoffset 10ms linear",
						strokeDasharray: "139.989, 139.989",
						strokeDashoffset: "139.989",
					}}
				/>
			</svg>
		</div>
	);
};

export default ScrollToTop;
