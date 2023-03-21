import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home"
import Signup from "../Login/SignUp";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		</Routes>
	);
}

export default App;
