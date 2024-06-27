import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/loginPage';
import Register from './pages/registerPage';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import Support from './pages/Support';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/topics" component={Topics} />
        <Route path="/support" component={Support} />
        <Route path="/notifications" component={Notifications} />
        
      </Switch>
    </Router>
  );
}
export default App;