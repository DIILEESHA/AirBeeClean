import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/bout/About";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Single from "./components/single/Single";

import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/contact/Contact";

const App = () => {
  useEffect(() => {
    // Initialize Lenis and store it in `window` for global access
    const lenis = new Lenis({
      lerp: 0.06,
      smooth: true,
      direction: "vertical",
    });

    // Make Lenis globally accessible (optional but useful)
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null; // Clean up
    };
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/single" element={<Single />} /> */}
          <Route path="/service/:slug" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
