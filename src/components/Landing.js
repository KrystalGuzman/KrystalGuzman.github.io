import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.header}
          </div>
          <p className="lead mb-5">{this.landingData.bio1}</p>
          <p className="lead mb-5">{this.landingData.bio2}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:kryguzman@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;