import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

//import pages
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import AboutMePage from "./pages/aboutme";
import CouplesPage from "./pages/specialties/couples";
import FertilityPage from "./pages/specialties/fertility";
import SomaticPage from "./pages/specialties/somatic";
import SupervisionPage from "./pages/specialties/supervision";
import TraumaPage from "./pages/specialties/trauma";

//import header & footer
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/specialty/couple" element={<CouplesPage />} />
            <Route path="/specialty/fertility" element={<FertilityPage />} />
            <Route path="/specialty/somatic" element={<SomaticPage />} />
            <Route
              path="/specialty/supervision"
              element={<SupervisionPage />}
            />
            <Route path="/specialty/trauma" element={<TraumaPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
