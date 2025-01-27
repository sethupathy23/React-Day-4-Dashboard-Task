import LoginPage from "./login";
import Home from "./Home";

// import Weather from "./weather";
import Imagegen from "../imagegen"; // Ensure the file path is correct
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Weather from "../weather";
// import Weather from "../weatherapp";
// import Weatherapp from "../weatherapp";
import Weatherapp from "../weatherapp";
import { TicTacToe } from "../tictactoe";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/weather" element={<Weatherapp />} />
        <Route path="/imagegenrator" element={<Imagegen />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/dash" element={<Widgets />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <div>{/* <LoginPage /> */}</div>
    </div>
  );
}

export default App;
