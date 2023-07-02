import React, { Component } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

class ProjectCard extends Component {
    
    render() {
        return(
            <>
                <div class="col-5 card override-bs mb-3 mx-1">
                    <div class="card-header ">
                        <img src={this.props.item.logo} alt="logo"class="d-block user-select-none img-border" width="100%" height="100%"></img>
                    </div>
                    <h3 className="primary-text mt-2">{this.props.item.title}</h3>
                    <div class="card-body">
                        <h4 class="card-text primary-text text-lg">{this.props.item.summary}</h4>
                        <ul>
                            {this.props.item.bullets.map((bullet) => {
                                return <li className="primary-text text-start">{bullet}</li>
                            })}
                        </ul>
                    </div>
                    <div class="card-body">
                        <a href={this.props.item.link.ref} class="card-link link-text">{this.props.item.link.text}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectCard;