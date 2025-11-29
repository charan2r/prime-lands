import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/admin/adminDashboard";
import BrokerDashboard from "./pages/broker/brokerDashboard";
import AgentDashboard from "./pages/agent/agentDashboard";
import Login from "./pages/auth/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Broker */}
        <Route path="/broker" element={<BrokerDashboard />} />

        {/* Agent */}
        <Route path="/agent" element={<AgentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
