import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/bout/About";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Single from "./components/single/Single";

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.06,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/single" element={<Single />} /> */}
          <Route path="/service/:slug" element={<Single />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
