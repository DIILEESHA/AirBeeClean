import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div style={{ height: "" }}>
      <Nav />
      <main style={{ minHeight: "" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
