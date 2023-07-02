import React, { Component } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

class Info extends Component {
    render() {
        return(
            <div className="col-12 col-md-8 col-lg-6 col-xl-8 my-2 d-flex justify-content-center text-center">
                 {/* Header */}
                 <div className="p2">
                    <div className="top-space"></div>
                    <h1 className="primary-text">Claudia Jodlowski</h1>
                    <div>
                        <i className="fab fa-linkedin fa-lg icons accent-color-2"></i>
                        <i className="fab fa-github fa-lg icons accent-color-2"></i>
                        <i className="fab fa-itch-io fa-lg icons accent-color-2"></i>
                        <i className="fab  fa-twitter fa-lg icons accent-color-2"></i>
                        <i className="fas fa-solid fa-envelope fa-lg icons accent-color-2"></i>
                    </div>
                    <p> <a className="link-text">cnjodlowski@gmail.com</a> &nbsp;&nbsp;&nbsp;
                    <a className="link-text">(732) - 540 - 3526 </a>
                    </p>
                    {/* About me */}
                    <div className="pt-4 ps-2 text-color">
                        <h2 className= "link-text">About Me</h2>
                        <p className="text-start primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a cursus erat. Ut sed bibendum nibh, et finibus leo. Vivamus eu viverra augue. Ut vitae ornare purus. Sed in ex at mi aliquet sodales nec in arcu. Nam in varius nisl. Maecenas posuere libero et nisl rhoncus malesuada. Cras eleifend eleifend quam quis commodo. In hac habitasse platea dictumst. Fusce nec mollis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum suscipit mollis. Duis eu dolor risus. Vestibulum felis ipsum, elementum eu consectetur eu, viverra eu neque. Morbi dictum id neque ut dapibus. </p>
                    </div>
                    {/*Projects*/}
                    <div className="pt-5 link-text">
                        <h2>Projects</h2>
                        <div className="row justify-content-center">
                            {projects.map((project) => {
                                return <ProjectCard item={project}></ProjectCard>
                            })}
                        </div>
                    </div>
                    {/*Resume*/}
                    <div className="pt-5">
                        <a type="button" href="JodlowskiClaudia_Resume.docx" class="btn btn-primary btn-lg override-bs" download>Check Out My Resume</a>
                    </div>
                 </div>
    

    
            </div>
        )}
}

export default Info;