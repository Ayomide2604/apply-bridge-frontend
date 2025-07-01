import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Dashboard from "./screens/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";

function App() {
	const [user, setUser] = useState(false);
	const location = useLocation();
	const isErrorPage =
		location.pathname === "/error" || location.pathname === "/page-not-found";

	return (
		<>
			{!isErrorPage && <Header user={user} setUser={setUser} />}
			<main className="app">
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/login"
						element={<Login setUser={setUser} user={user} />}
					/>
					<Route
						path="/signup"
						element={<Signup setUser={setUser} user={user} />}
					/>
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route
						path="/dashboard/*"
						element={<Dashboard user={user} setUser={setUser} />}
					>
						<Route index element={<DashboardHome />} />
						<Route path="home" element={<DashboardHome />} />
						<Route path="applications" element={<Applications />} />
						<Route path="profile" element={<Profile />} />
					</Route>
					<Route path="/error" element={<ErrorPage />} />
					<Route path="*" element={<Navigate to="/error" replace />} />
				</Routes>
			</main>
			{!isErrorPage && <Footer />}
			<ScrollToTop />
		</>
	);
}

export default App;
