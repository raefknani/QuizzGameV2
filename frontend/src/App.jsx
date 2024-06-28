import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/loginPage";
import Register from "./pages/registerPage";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import Support from "./pages/Support";
import Notifications from "./pages/Notifications";

import HistoryTopic from "./pages/HistoryTopic";
import MedicineTopic from "./pages/MedicineTopic";
import TechnologyTopic from "./pages/TechnologyTopic";
import AgricultureTopic from "./pages/AgricultureTopic";
import AllTopics from "./pages/AllTopics";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route default path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/topics" component={Topics} />
        <Route path="/support" component={Support} />
        <Route path="/notifications" component={Notifications} />

        <Route path="/history" component={HistoryTopic} />
        <Route path="/medicine" component={MedicineTopic} />
        <Route path="/technology" component={TechnologyTopic} />
        <Route path="/agriculture" component={AgricultureTopic} />
        <Route path="/alltopics" component={AllTopics} />
        <Route path="/quiz" component={Quiz} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}
export default App;
