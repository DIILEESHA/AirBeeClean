import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
