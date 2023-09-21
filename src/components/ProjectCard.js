import React, { Component } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

class ProjectCard extends Component {
    
    render() {
        return(
            <>
                <div class=" col-11 col-sm-10 col-lg-5 col-xl-3 card override-bs mb-3 mx-2">
                    <div class="card-header override-bs align-content-center">
                        <img src={this.props.item.logo} alt="logo"class="img-border" width="80%" height="80%"></img>
                    </div>
                    <h3 className="primary-text sans-serif"><a className="primary-text sans-serif hover-underline-animation" href={this.props.item.link.ref}>{this.props.item.title}</a></h3>
                    <div class="card-body">
                        <h5 class="primary-text serif">{this.props.item.summary}</h5>
                        <ul>
                            {this.props.item.bullets.map((bullet) => {
                                return <li className="primary-text serif text-start">{bullet}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectCard;