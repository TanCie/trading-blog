import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
