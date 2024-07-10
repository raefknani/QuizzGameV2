import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/loginPage";
import Register from "./pages/registerPage";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import Support from "./pages/Support";
import Notifications from "./pages/Notifications";
import AllTopics from "./pages/AllTopics";
import Quiz from "./pages/Quiz";
import TopicDetails from "./pages/TopicDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<TopicDetails />} />
        <Route path="/support" element={<Support />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* topics list */}
        {/* end of topics list */}

        <Route path="/alltopics" element={<AllTopics />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
export default App;
