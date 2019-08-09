import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/applicant" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;