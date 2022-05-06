import './App.css';
import Trailers from "./pages/Trailers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trailers" element={<Trailers />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
