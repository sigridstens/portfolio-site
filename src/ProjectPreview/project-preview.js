import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function ProjectPreview(props) {
    return(
        <figure className="project-preview">
            <Link to={props.linkpath}>
                <img src={process.env.PUBLIC_URL + props.imgpath} className="project-img" alt={props.alt} />
                <figcaption>
                    <div className="caption-container">
                            <h2>{props.name}</h2>
                            <h3>{props.role}</h3>
                    </div>
                </figcaption>
            </Link>
        </figure>
    )
}


export default ProjectPreview;