import React from 'react';
import './project-page.css';
import {Link, useParams} from 'react-router-dom';
import {projects} from '../Portfolio/portfolio.js';



function ProjectPage(props) {
  let { id } = useParams();
  console.log(projects);
  // find id in projects
  const project = projects.find(function (project) {
    return project.linkpath === `/project-page/${id}`
  });

  return(
    <main className="project-page">
      <h2 className="project-title">{project.name}</h2>
      <h3>Type: {project.type}</h3>

      <div className="col-container">
        <section className="col col-onethird project-description">
          <p>{project.descriptionParaOne}</p>
          <p>{project.descriptionParaTwo}</p>
          <p>{project.descriptionParaThree}</p>
        </section>

        <figure className="col col-twothirds project-images">
          <img src={process.env.PUBLIC_URL + project.imgpath} className="project-img" alt={props.alt} />
        </figure>
      </div>
    </main>
    )
}


export default ProjectPage;