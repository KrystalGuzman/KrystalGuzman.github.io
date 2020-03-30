import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.work = props.work;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="work">
        <div className="w-100">
          <h2 className="mb-5">Work Experience</h2>
          {
            this.work.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.company}</h3>
                  <div className="subheading mb-3">{exp.position}</div>
                  <p>{exp.point1}</p>
                  <p>{exp.point2}</p>
                  <p>{exp.point3}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Work;