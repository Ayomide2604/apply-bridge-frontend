import { Link } from "react-router-dom";
import icon from "../assets/img/brand-icon.svg";

const Signup = () => {
	return (
		<>
			<div className="pattern-square" />
			{/*Pageheader start*/}
			<section className="py-5 py-lg-8">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 offset-xl-4 col-md-12 col-12">
							<div className="text-center">
								<Link to="/">
									<img src={icon} alt="logo" className="mb-3" />
								</Link>
								<h1 className="mb-1">Create Account</h1>
								<p className="mb-0">
									Sign up now and get free account instant.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Pageheader end*/}
			{/*Sign up start*/}
			<section>
				<div className="container">
					<div className="row justify-content-center mb-6">
						<div className="col-xl-5 col-lg-6 col-md-8 col-12">
							<div className="card shadow-sm mb-3">
								<div className="card-body">
									<form className="needs-validation mb-6">
										<div className="mb-3">
											<label
												htmlFor="signupFullnameInput"
												className="form-label"
											>
												Full Name
											</label>
											<input
												type="text"
												className="form-control"
												id="signupFullnameInput"
												required=""
											/>
											<div className="invalid-feedback">
												Please enter full name
											</div>
										</div>
										<div className="mb-3">
											<label htmlFor="signupEmailInput" className="form-label">
												Email
												<span className="text-danger">*</span>
											</label>
											<input
												type="email"
												className="form-control"
												id="signupEmailInput"
												required=""
											/>
											<div className="invalid-feedback">
												Please enter email.
											</div>
										</div>
										<div className="mb-3">
											<label
												htmlFor="formSignUpPassword"
												className="form-label"
											>
												Password
											</label>
											<div className="password-field position-relative">
												<input
													type="password"
													className="form-control fakePassword"
													id="formSignUpPassword"
													required=""
												/>
												<span>
													<i className="bi bi-eye-slash passwordToggler" />
												</span>
												<div className="invalid-feedback">
													Please enter password.
												</div>
											</div>
										</div>
										<div className="mb-3">
											<label
												htmlFor="formSignUpConfirmPassword"
												className="form-label"
											>
												Confirm Password
											</label>
											<div className="password-field position-relative">
												<input
													type="password"
													className="form-control fakePassword"
													id="formSignUpConfirmPassword"
													required=""
												/>
												<span>
													<i className="bi bi-eye-slash passwordToggler" />
												</span>
												<div className="invalid-feedback">
													Please enter password.
												</div>
											</div>
										</div>
										<div className="mb-3">
											<div className="mb-4 d-flex align-items-center justify-content-between">
												<div className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														id="signupCheckTextCheckbox"
													/>
													<label
														className="form-check-label ms-2"
														htmlFor="signupCheckTextCheckbox"
													>
														<a href="#">Terms of Use</a> &amp;{" "}
														<a href="#">Privacy Policy</a>
													</label>
												</div>
											</div>
										</div>
										<div className="d-grid">
											<button className="btn btn-primary" type="submit">
												Sign Up
											</button>
										</div>
									</form>
									<span>Sign up with your social network.</span>
									<div className="d-grid mt-3">
										<a href="#" className="btn btn-google">
											<span className="me-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={16}
													height={16}
													fill="currentColor"
													className="bi bi-google"
													viewBox="0 0 16 16"
												>
													<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
												</svg>
											</span>
											Continue with Google
										</a>
									</div>
									<div className="d-grid mt-2">
										<a href="#" className="btn btn-facebook">
											<span className="me-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={16}
													height={16}
													fill="currentColor"
													className="bi bi-facebook"
													viewBox="0 0 16 16"
												>
													<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
												</svg>
											</span>
											Continue with Facebook
										</a>
									</div>
								</div>
							</div>
							<span>
								Already have an account?
								<Link to="/login" className="text-primary">
									Sign in here.
								</Link>
							</span>
						</div>
					</div>
				</div>
			</section>
			{/*Sign up end*/}
			<div className="position-absolute end-0 bottom-0 m-4">
				<div className="dropdown">
					<button
						className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
						type="button"
						aria-expanded="false"
						data-bs-toggle="dropdown"
						aria-label="Toggle theme (auto)"
					>
						<i className="bi theme-icon-active" />
						<span className="visually-hidden bs-theme-text">Toggle theme</span>
					</button>
					<ul
						className="dropdown-menu dropdown-menu-end shadow"
						aria-labelledby="bs-theme-text"
					>
						<li>
							<button
								type="button"
								className="dropdown-item d-flex align-items-center"
								data-bs-theme-value="light"
								aria-pressed="false"
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
								className="dropdown-item d-flex align-items-center active"
								data-bs-theme-value="auto"
								aria-pressed="true"
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

export default Signup;
