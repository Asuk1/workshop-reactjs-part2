import About from'./pages/About.js';
import Home from'./pages/Home.js';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
