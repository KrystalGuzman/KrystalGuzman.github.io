import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
// import Work from './components/Work';
import Contact from './components/Contact';
import profileData from './profileData.json';
import ReactGA from 'react-ga';
import Fade from 'react-reveal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      projects : profileData.projects,
      education : profileData.education,
      skills : profileData.skills,
      work : profileData.work
    };

    ReactGA.initialize('G-ZH5SXFWR8E');
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Fade top>
          <Landing landingData={this.state.landingData} />
          </Fade>
          <hr className="m-0" />
          <Fade top>
          <Projects projects={this.state.projects} />
          </Fade>
          <hr className="m-0" />
          <Fade top>
          <Education education={this.state.education}/>
          </Fade>
          <hr className="m-0" />
          <Fade top>
          <Skills skills={this.state.skills} />
          </Fade>
          {/* <hr className="m-0" />
          <Fade top>
          <Work work={this.state.work} />
          </Fade> */}
          <hr className="m-0" />
          <Fade top>
          <Contact />
          </Fade>
        </div>
      </div>
    );
  }
}

export default App;
