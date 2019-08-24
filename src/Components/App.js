import React from 'react';
import Navbar from './Layout/Navbar';
import Home from './Home';
import Login from './Login';
import OverviewLinks from './OverviewLinks';
import Sectionstatus from './SectionsStatus';
import Buttons from './Buttons/Buttons';
import Personal from './ApplicationForm/PersonalDetails';
import Residence from './ApplicationForm/ResidenceDetails';
import Degree from './ApplicationForm/DegreeDetails';
import Document from './ApplicationForm/UploadDocument';
import MIT from './ApplicationForm/MITDetails';

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
        <Route path="/login" component={Login}/>
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