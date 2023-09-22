import React, { Component } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

class Info extends Component {
    render() {
        return(
            <div className="col-12 col-md-8 col-lg-8 col-xl-8 my-2 d-flex justify-content-center text-center p-0">
                 {/* Header */}
                 <div className="p2">
                    <div className="top-space"></div>
                    <h1 className="primary-text header-deco sans-serif">Claudia Jodlowski</h1>
                    <div>
                        <i className="fab fa-linkedin fa-lg icons accent-color-2"></i>
                        <i className="fab fa-github fa-lg icons accent-color-2"></i>
                        <i className="fab fa-itch-io fa-lg icons accent-color-2"></i>
                        <i className="fab  fa-twitter fa-lg icons accent-color-2"></i>
                        <i className="fas fa-solid fa-envelope fa-lg icons accent-color-2"></i>
                    </div>
                    <p> <a className="link-text serif">cnjodlowski@gmail.com</a> &nbsp;&nbsp;&nbsp;
                    <a className="link-text serif">(732) - 540 - 3526 </a>
                    </p>
                    {/* About me */}
                    <div className="pt-4 ps-5 text-start">
                        <h2 className= "primary-text sans-serif">Hey There!</h2>
                        <p className="text-start primary-text serif p-font-size"></p>
                        <p className="text-start primary-text serif p-font-size">Blah blah ik how to talk aboutmyself totally</p>
                    </div>
                    {/*Projects*/}
                    <div className="pt-5 link-text second-background">
                        <h2 className= "primary-text header-deco sans-serif">Projects</h2>
                        <div className="align-items-center">
                            <button className= "btn btn-primary btn-lg override-bs sans-serif button-border project-button m-3">Game</button>
                            <button className= "btn btn-primary btn-lg override-bs sans-serif button-border project-button m-3">Tech</button>
                        </div>
                        <div className="row justify-content-center">
                            {projects.map((project) => {
                                return <ProjectCard item={project}></ProjectCard>
                            })}
                        </div>
                    </div>
                    {/*Resume*/}
                    <div className="pt-5 mb-5">
                        <a type="button" href="JodlowskiClaudia_Resume.docx" class="btn btn-primary btn-lg override-bs sans-serif button-border" download>Check Out My Resume</a>
                    </div>
                 </div>
    

    
            </div>
        )}
}

export default Info;