import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Desctripion</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                     <div>Posted by Adam</div>
                     <div>April 26, 8pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails