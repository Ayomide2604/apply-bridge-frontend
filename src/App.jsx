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
import FancyLoader from "./components/Loader";

function App() {
	return (
		<>
			<Header />
			<main className="app">
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/dashboard/*" element={<Dashboard />}>
						<Route index element={<DashboardHome />} />
						<Route path="home" element={<DashboardHome />} />
						<Route path="applications" element={<Applications />} />
						<Route path="profile" element={<Profile />} />
					</Route>
					<Route path="/error" element={<ErrorPage />} />
					<Route path="*" element={<Navigate to="/error" replace />} />
				</Routes>
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
