import React from 'react';
import './project-image.css';


function ProjectImage(props) {
    console.log(props);
    return(
      <figure className="project-page-img">
          <img src={process.env.PUBLIC_URL + props.imgpath} className="project-img" alt={props.alt} />
      </figure>

)
}





export default ProjectImage;