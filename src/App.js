import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "aos/dist/aos.css";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <div className="text-white bg-gray-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
