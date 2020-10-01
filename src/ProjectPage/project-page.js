import React, {useEffect, useState} from 'react';
import './project-page.css';
import {Link, useParams} from 'react-router-dom';
import {projects} from '../Portfolio/portfolio.js';
import ProjectImage from "../ProjectImage/project-image";



function ProjectPage(props) {

  let { id } = useParams();
  // find id in projects
  const project = projects.find(function (project) {
    return project.linkpath === `/project-page/${id}`
  });


  return(
    <main className="project-page">
      <h2 className="project-title">{project.name}</h2>
      <h3>{project.role}</h3>
      <a href={project.projectURL} target="blank" className={`${!project.projectURL ? 'hidden' : ''}`}>Link to website</a>

      <div className="col-container">
        <section className="col col-twothirds project-images">
          {project.projectImages.map(image => {
            return (
              <ProjectImage
               imgpath={image}
              />
            )
          })}
        </section>

        <section className="col col-onethird project-description">
          <p>{project.descriptionParaOne}</p>
          <p>{project.descriptionParaTwo}</p>
          <p>{project.descriptionParaThree}</p>
        </section>
      </div>
    </main>
    )
}


export default ProjectPage;