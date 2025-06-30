import { BiFingerprint } from "react-icons/bi";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<>
			<div className="pattern-square" />
			{/*Pageheader start*/}
			<section className="py-5 py-lg-8">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 offset-xl-4 col-md-12 col-12">
							<div className="text-center">
								<div className="icon-xxl icon-shape border rounded p-3 mb-4">
									<BiFingerprint size={32} />
								</div>
								<h1 className="mb-1">Forgot Password</h1>
								<p className="mb-0">
									No worries, we will send you reset instruction.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Pageheader end*/}
			{/*Forget password start*/}
			<section>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-8 col-12">
							<div className="card shadow-sm">
								<div className="card-body">
									<form className="needs-validation mb-5" noValidate="">
										<div className="mb-3">
											<label htmlFor="forgetEmailInput" className="form-label">
												Email
												<span className="text-danger">*</span>
											</label>
											<input
												type="email"
												className="form-control"
												id="forgetEmailInput"
												placeholder="Enter your email"
												required=""
											/>
											<div className="invalid-feedback">
												Please enter email.
											</div>
										</div>
										<div className="d-grid">
											<button className="btn btn-primary" type="submit">
												Reset Password
											</button>
										</div>
									</form>
									<div className="text-center">
										<Link to="/login" className="icon-link icon-link-hover">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												fill="currentColor"
												className="bi bi-arrow-left"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
												/>
											</svg>
											<span>Back to Login</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Forget password end*/}
			<div className="position-absolute end-0 bottom-0 m-4">
				<div className="dropdown">
					<button
						className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
						type="button"
						aria-expanded="false"
						data-bs-toggle="dropdown"
						aria-label="Toggle theme (auto)"
					>
						<i className="bi theme-icon-active">
							<i className="bi theme-icon bi-sun-fill" />
						</i>
						<span className="visually-hidden bs-theme-text">Toggle theme</span>
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
		</>
	);
};

export default ForgotPassword;
