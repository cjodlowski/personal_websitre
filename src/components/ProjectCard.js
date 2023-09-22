import React, { Component } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

class ProjectCard extends Component {
    
    render() {
        return(
            <>
                <div class=" col-11 col-sm-10 col-lg-5 col-xxl-4 card override-bs mb-3 mx-2">
                    <h3 className="card-accent pb-1 m-0"><a className="primary-text sans-serif my-2 hover-underline-animation" href={this.props.item.link.ref}>{this.props.item.title}</a></h3>
                    <hr className="card-line-deco"></hr>
                    <div class="card-header override-bs align-content-center">
                        <img src={this.props.item.logo} alt="logo"class="img-border" width="80%" height="80%"></img>
                    </div>
                    <div class="card-body">
                        <h5 class="card-text serif">{this.props.item.summary}</h5>
                        <ul>
                            {this.props.item.bullets.map((bullet) => {
                                return <li className="card-text serif text-start">{bullet}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectCard;