import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";

function App() {
	return (
		<>
			<Header />
			<main className="app">
				<Routes>
					<Route index element={<HomeScreen />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
