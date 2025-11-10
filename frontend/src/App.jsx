import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./pages/client/home.jsx";
import About from "./pages/client/about.jsx";
import Contact from "./pages/client/contact.jsx";
import Properties from "./pages/client/properties.jsx";
import Services from "./pages/client/services.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Login from "./pages/auth/login.jsx";
import Registration from "./pages/auth/registration.jsx";
import AdminDashboard from "./pages/admin/adminDashboard.jsx";
import AgentDashboard from "./pages/agent/agentDashboard.jsx";
import BrokerDashboard from "./pages/broker/brokerDashboard.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/agent" element={<AgentDashboard />} />
          <Route path="/broker" element={<BrokerDashboard />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
