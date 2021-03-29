import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/home.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home}/>
      </div>
    </Router>
  );
}

export default App;
