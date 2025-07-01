import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import avatar from "../assets/img/avatar.jpg";

const navItems = [
	{ label: "Dashboard", path: "home", icon: "bx bx-grid-alt" },
	{ label: "Applications", path: "applications", icon: "bx bx-file" },
	{ label: "Messages", path: "messages", icon: "bx bx-message" },
	{ label: "Profile", path: "profile", icon: "bx bx-user" },
	{ label: "Sign Out", path: "/", icon: "bx bx-log-out" },
];

const Dashboard = () => {
	return (
		<section className="py-lg-7 py-5 bg-light-subtle">
			<div className="container-fluid">
				<div className="row min-vh-100">
					<aside className="col-lg-3 col-md-4 bg-white border-end px-0 mb-4 mb-md-0">
						<div className="d-flex flex-column align-items-center align-items-md-start p-4 h-100 position-relative">
							<div className="w-100 d-flex flex-column align-items-center align-items-md-start mb-4">
								<img
									src={avatar}
									alt="avatar"
									className="avatar avatar-lg rounded-circle mb-3 shadow-sm"
									style={{
										marginTop: 8,
										marginBottom: 16,
										border: "4px solid #f8f9fa",
										background: "#fff",
									}}
								/>
								<h5 className="mb-0">Welcome!</h5>
								<small className="mb-4">ApplyBridge Account</small>
							</div>
							<nav className="w-100">
								<ul className="nav flex-column nav-account gap-1">
									{navItems.map((item) => (
										<li className="nav-item w-100" key={item.path}>
											<NavLink
												to={
													item.path === "/"
														? "/"
														: `/dashboard/${item.path}`
												}
												className={({ isActive }) =>
													"nav-link d-flex align-items-center px-3 py-2 rounded" +
													(isActive
														? " active bg-primary text-white"
														: " text-dark")
												}
												end={item.path === "home"}
											>
												<i
													className={`align-bottom ${item.icon} me-2`}
												></i>
												<span>{item.label}</span>
											</NavLink>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</aside>
					<main className="col-lg-9 col-md-8 p-4">
						<Outlet />
					</main>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
