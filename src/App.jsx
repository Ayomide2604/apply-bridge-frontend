import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
	return (
		<>
			<Header />
			<main className="app">
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
