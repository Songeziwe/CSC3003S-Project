import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import OverviewLinks from './OverviewLinks';
import Sectionstatus from './SectionsStatus';
import Buttons from './Buttons/Buttons';
import Personal from './ApplicationForm.js/PersonalDetails';
import Residence from './ApplicationForm.js/ResidenceDetails';
import Degree from './ApplicationForm.js/DegreeDetails';
import Document from './ApplicationForm.js/UploadDocument';
import MIT from './ApplicationForm.js/MITDetails';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <div className="container section">
          <div className="row">
            <Route path="/applicant" component={OverviewLinks} />
            <Route path="/applicant" component={Sectionstatus} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Route path="/applicant" component={Buttons} />
          </div>
        </div>
        <Route path="/personal" component={Personal}/>
        <Route path="/residence" component={Residence}/>
        <Route path="/degree" component={Degree}/>
        <Route path="/document" component={Document}/>
        <Route path="/mit" component={MIT}/>
      </div>
    </BrowserRouter>
  );
}

export default App;