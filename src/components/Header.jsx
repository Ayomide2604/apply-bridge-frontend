import logo from "../assets/img/logo.svg";
const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg  transparent navbar-transparent navbar-light navbar-clone fixed navbar-stick">
				<div className="container px-3">
					<a className="navbar-brand" href="index.html">
						<img src={logo} alt="logo" />
					</a>
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
							<a href="index.html" className="text-inverse">
								<img src={logo} alt="logo" />
							</a>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							/>
						</div>
						<div className="offcanvas-body pt-0 align-items-center">
							<ul className="navbar-nav mx-auto align-items-lg-center">
								<li className="nav-item ">
									<a className="nav-link " href="#" role="button">
										Home
									</a>
								</li>
								<li className="nav-item ">
									<a className="nav-link" href="#" role="button">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link " href="#" role="button">
										Services
									</a>
								</li>
								<li className="nav-item ">
									<a className="nav-link " href="#" role="button">
										Contact
									</a>
								</li>
							</ul>

							<div className="mt-3 mt-lg-0 d-flex align-items-center">
								<a href="signin.html" className="btn btn-light mx-2">
									Login
								</a>
								<a href="signup.html" className="btn btn-primary">
									Create account
								</a>
							</div>

							{/* theme toggle  */}

							<div className="text-lg-end d-flex align-items-center justify-content-lg-end ms-3">
								<div className="dropdown">
									<button
										className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
										type="button"
										aria-expanded="false"
										data-bs-toggle="dropdown"
										aria-label="Toggle theme (auto)"
									>
										<i className="bi theme-icon-active lh-1">
											<i className="bi theme-icon bi-sun-fill" />
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
												className="dropdown-item d-flex align-items-center active"
												data-bs-theme-value="light"
												aria-pressed="true"
											>
												<i className="bi theme-icon bi-sun-fill" />
												<span className="ms-2">Light</span>
											</button>
										</li>
										<li>
											<button
												type="button"
												className="dropdown-item d-flex align-items-center"
												data-bs-theme-value="dark"
												aria-pressed="false"
											>
												<i className="bi theme-icon bi-moon-stars-fill" />
												<span className="ms-2">Dark</span>
											</button>
										</li>
										<li>
											<button
												type="button"
												className="dropdown-item d-flex align-items-center"
												data-bs-theme-value="auto"
												aria-pressed="false"
											>
												<i className="bi theme-icon bi-circle-half" />
												<span className="ms-2">Auto</span>
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
