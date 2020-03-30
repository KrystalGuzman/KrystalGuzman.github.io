import React, { Component } from 'react';

class Projects extends Component {
	constructor(props) {
		super(props);

		this.projects = props.projects;
	}

	render() {
		return (
			<section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
				<div className="w-100">
					<h2 className="mb-5">Projects</h2>
					{this.projects.map((project, index) => (
						<div
							key={index}
							className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
						>
							<div className="resume-content">
								<a href={project.link}>
									<h3 className="mb-0">{project.title}</h3>
								</a>
								<img
									className="images" height="400" width="400"
									src={project.image}
									alt={project.title}
								/>
								<p>{project.point1}</p>
								<p>{project.point2}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default Projects;
