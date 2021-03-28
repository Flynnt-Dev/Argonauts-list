import React from 'react';
import { BrowerserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/boostrap.min.css";
// import './App.css';

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
