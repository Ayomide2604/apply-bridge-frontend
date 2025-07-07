import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avatar.png";
import useAuthStore from "../stores/useAuthStore";
import getImageUrl from "../utils/getImageUrl";
import { useEffect, useState } from "react";

const Header = () => {
	const { user, logout } = useAuthStore();
	const location = useLocation();
	const [theme, setTheme] = useState(
		() => localStorage.getItem("bs-theme") || "auto"
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-bs-theme", theme);
		localStorage.setItem("bs-theme", theme);
	}, [theme]);

	const handleThemeChange = (value) => {
		setTheme(value);
	};

	const hideOnRoutes = ["/login", "/signup", "/forgot-password", "/error"];

	if (hideOnRoutes.includes(location.pathname)) {
		return null;
	}
	return (
		<header>
			<nav className="navbar navbar-expand-lg  transparent navbar-stick">
				<div className="container px-3">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="logo" height={100} />
					</Link>
					<button
						className="navbar-toggler offcanvas-nav-btn"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target=".offcanvas-nav"
					>
						<i className="bi bi-list" />
					</button>
					<div
						className="offcanvas offcanvas-start offcanvas-nav"
						style={{ width: "20rem" }}
					>
						<div className="offcanvas-header">
							<Link to="/" className="text-inverse">
								<img src={logo} alt="logo" height={100} />
							</Link>
							<button
								type="button"
								className="btn-close me-2"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							/>
						</div>
						<div className="offcanvas-body pt-0 align-items-center">
							<ul className="navbar-nav mx-auto align-items-lg-center">
								<li className="nav-item ">
									<p
										className="nav-link "
										role="button"
										data-bs-toggle="offcanvas"
										data-bs-target=".offcanvas-nav"
									>
										<Link to="/">Home</Link>
									</p>
								</li>

								<li className="nav-item">
									<p
										className="nav-link"
										role="button"
										data-bs-toggle="offcanvas"
										data-bs-target=".offcanvas-nav"
									>
										<Link to="/#services">Services</Link>
									</p>
								</li>
								<li className="nav-item ">
									<p
										className="nav-link "
										role="button"
										data-bs-toggle="offcanvas"
										data-bs-target=".offcanvas-nav"
									>
										<Link to="/contact">Contact</Link>
									</p>
								</li>
							</ul>

							<div className="mt-3 mt-lg-0 d-flex align-items-center nav-item dropdown">
								{user ? (
									<>
										<span
											className="nav-link dropdown-toggle d-flex align-items-center"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<span>{user?.record?.email}</span>
											<img
												src={
													getImageUrl(user?.record, user?.record?.avatar) ||
													avatar
												}
												alt="profile"
												className="img-fluid rounded-circle ms-3"
												style={{
													height: 40,
													width: 40,
													objectFit: "cover",
												}}
											/>
										</span>
										<ul className="dropdown-menu mt-2 shadow rounded-3 border-0 p-2">
											<li className="mb-1">
												<Link
													className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-2 fw-semibold text-primary"
													to="/dashboard"
												>
													<i className="bi bi-grid fs-5" />
													Dashboard
												</Link>
											</li>
											<li className="mb-1">
												<Link
													className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-2 fw-semibold"
													to="/dashboard/profile"
												>
													<i className="bi bi-person fs-5" />
													Profile
												</Link>
											</li>

											<li>
												<button
													onClick={logout}
													className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-2 fw-semibold text-danger"
												>
													<i className="bi bi-power fs-5" />
													Logout
												</button>
											</li>
										</ul>
									</>
								) : (
									<div className="d-flex gap-3">
										<Link to="/login" className="btn btn-primary">
											Get Started
										</Link>
									</div>
								)}
							</div>

							<div className="text-lg-end d-flex align-items-center justify-content-lg-end ms-3 my-3">
								<div className="dropdown">
									<button
										className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
										type="button"
										aria-expanded="false"
										data-bs-toggle="dropdown"
										aria-label={`Toggle theme (${theme})`}
									>
										<i className="bi theme-icon-active lh-1">
											{theme === "dark" ? (
												<i className="bi theme-icon bi-moon-stars-fill" />
											) : (
												<i className="bi theme-icon bi-sun-fill" />
											)}
										</i>
										<span className="visually-hidden bs-theme-text">
											Toggle theme
										</span>
									</button>
									<ul
										className="dropdown-menu dropdown-menu-end shadow"
										aria-labelledby="bs-theme-text"
									>
										<li>
											<button
												type="button"
												className={`dropdown-item d-flex align-items-center${
													theme === "light" ? " active text-primary" : ""
												}`}
												data-bs-theme-value="light"
												aria-pressed={theme === "light"}
												onClick={() => handleThemeChange("light")}
											>
												<i className="bi theme-icon bi-sun-fill" />
												<span className="ms-2">Light</span>
											</button>
										</li>
										<li>
											<button
												type="button"
												className={`dropdown-item d-flex align-items-center${
													theme === "dark" ? " active text-primary" : ""
												}`}
												data-bs-theme-value="dark"
												aria-pressed={theme === "dark"}
												onClick={() => handleThemeChange("dark")}
											>
												<i className="bi theme-icon bi-moon-stars-fill" />
												<span className="ms-2">Dark</span>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
