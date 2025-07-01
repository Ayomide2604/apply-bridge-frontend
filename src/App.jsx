import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";

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
					<Route path="/page-not-found" element={<ErrorPage />} />
					<Route path="*" element={<Navigate to="/page-not-found" replace />} />
				</Routes>
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
