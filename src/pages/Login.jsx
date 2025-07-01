import icon from "../assets/img/brand-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setUser, user }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Fake login: set user to true
		setUser(true);
		navigate("/dashboard");
	};

	return (
		<>
			<div className="pattern-square"></div>
			<section className="py-5 py-lg-8">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 offset-xl-4 col-md-12 col-12">
							<div className="text-center">
								<Link to="/">
									<img src={icon} alt="logo" className="mb-3" />
								</Link>
								<h1 className="mb-1">Welcome Back</h1>
								<p className="mb-0">
									Don’t have an account yet?
									<Link to="/signup" className="text-primary">
										Register here
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-5 col-lg-6 col-md-8 col-12">
							<div className="card shadow-sm mb-6">
								<div className="card-body">
									<form
										className="needs-validation mb-6"
										onSubmit={handleSubmit}
									>
										<div className="mb-3">
											<label htmlFor="signinEmailInput" className="form-label">
												Email
												<span className="text-danger">*</span>
											</label>
											<input
												type="email"
												className="form-control"
												id="signinEmailInput"
												required
												value={email}
												onChange={(e) => setEmail(e.target.value)}
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
													required
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												<span>
													<i className="bi bi-eye-slash passwordToggler"></i>
												</span>
												<div className="invalid-feedback">
													Please enter password.
												</div>
											</div>
										</div>

										<div className="mb-4 d-flex align-items-center justify-content-between">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													id="rememberMeCheckbox"
												/>
												<label
													className="form-check-label"
													htmlFor="rememberMeCheckbox"
												>
													Remember me
												</label>
											</div>

											<div>
												<Link to="/forgot-password" className="text-primary">
													Forgot Password
												</Link>
											</div>
										</div>

										<div className="d-grid">
											<button className="btn btn-primary" type="submit">
												Sign In
											</button>
										</div>
									</form>

									<span>Sign in with your social network.</span>
									<div className="d-grid mt-3">
										<a href="#" className="btn btn-google">
											<span className="me-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
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
											<span className="me-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
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
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
