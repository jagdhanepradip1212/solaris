import { Route, Routes } from "react-router-dom";
import "./App.css";
import Doctors from "./components/Doctors/Doctor";
import Home from "./components/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/about" element={<About  />}></Route>

      </Routes>
    </div>
  );
}

export default App;
