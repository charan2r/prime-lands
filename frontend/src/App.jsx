import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/client/home.jsx";
import About from "./pages/client/about.jsx";
import Contact from "./pages/client/contact.jsx";
import Properties from "./pages/client/properties.jsx";
import Services from "./pages/client/services.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Login from "./pages/auth/login.jsx";
import Registration from "./pages/auth/registration.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
