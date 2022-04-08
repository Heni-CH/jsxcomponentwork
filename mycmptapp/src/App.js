import React from 'react';
import './App.css';
import  FullName  from './Profile/FullName';
import  ProfilePhoto  from './Profile/ProfilePhoto';
import  Address  from './Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  
    return (
      
<div className='App'>
  <div className="container mt-5 mb-5">
    <div className="row no-gutters">
        <div className="col-md-4 col-lg-4">
          <ProfilePhoto/>
        </div>  
        <div className="col-md-8 col-lg-8">
            <div className="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                    <FullName/>
                </div>
                <div className="p-3 bg-black text-white">
                    <h6>GoMyCode Student</h6>
                </div>
                <div className="d-flex flex-row text-white">
                    <div className="p-4 bg-primary text-center skill-block">
                       <Address/>
                    </div>
                    <div className="p-3 bg-success text-center skill-block">
                    <h3>Future Web Developer</h3>
                        
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
  </div>
  </div>  
  
    );
  }


export default App;
