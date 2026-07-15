import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Brand from "./Pages/Brand";
import Client from "./Pages/Client";
import Contact from "./Pages/Contact";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import Prices from "./Pages/Prices";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/brands"
          element={
            <PageWrapper>
              <Brand />
            </PageWrapper>
          }
        />
        <Route
          path="/clients"
          element={
            <PageWrapper>
              <Client />
            </PageWrapper>
          }
        />
        <Route
          path="/price"
          element={
            <PageWrapper>
              <Prices/>
            </PageWrapper>
          }
        />
        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />
      </Routes>

      
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ background: "#050310", minHeight: "100vh" }}>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp/>
      </div>
    </BrowserRouter>
  );
}
