import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog/Blog.jsx";
import Contact from "./Contact/Contact.jsx";

import App from "./App.jsx";
import About from "./Components/About/About.jsx";
import ServiceSection from "./Components/Services/Services.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceSection />} />
           <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
     </Routes>
    </BrowserRouter>
  </StrictMode>
);
