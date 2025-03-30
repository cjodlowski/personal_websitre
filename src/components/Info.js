import React, { useState } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'
import ProjectCard from "./ProjectCard";
import { games, tech } from "../projects";


function Info() {
    let [activeTab, setActiveTab] = useState("games");

    return(
        <div className="col-12 col-md-8 col-lg-8 col-xl-8 justify-content-center text-center py-4 body-border second-background">
                {/* Header */}
                <div>
                <div className="top-space"></div>
                <h1 className="primary-text header-deco sans-serif">Claudia Jodlowski</h1>
                <div>
                    <i className="fab fa-linkedin fa-lg icons accent-color-2"></i>
                    <i className="fab fa-github fa-lg icons accent-color-2"></i>
                    <i className="fab fa-itch-io fa-lg icons accent-color-2"></i>
                    <i className="fab  fa-twitter fa-lg icons accent-color-2"></i>
                    <i className="fas fa-solid fa-envelope fa-lg icons accent-color-2"></i>
                </div>
                <p> 
                    <a className="link-text serif" href="mailto:cnjodlowski@gmail.com">cnjodlowski@gmail.com</a> &nbsp;&nbsp;&nbsp;
                    <a className="link-text serif">(732) - 540 - 3526 </a>
                </p>
                {/* About me */}
                <div className="row justify-content-center">
                    <div className={`card info-card-width-lvp override-bs mb-3 mx-2 d-block`}>
                        <div className="pt-4 ps-4 text-start">
                            <h2 className= "primary-content-text sans-serif">Hello!</h2>
                            <p className="text-start secondary-text serif p-font-size my-4"></p>
                        </div>
                    </div>
                </div>
                {/* Current Status */}
                <div className="row justify-content-center">
                    <div className={`card info-card-width-lvp override-bs mb-3 mx-2 d-block`}>
                        <div className="pt-4 ps-4 text-start">
                            <h2 className= "primary-content-text sans-serif">Current Status</h2>
                            <h4>
                                <span className= "primary-content-text sans-serif">Software Development Engineer I - Tracking Visiblity at UPS</span>
                                <i className={`devicon-csharp-line primary-content-icons d-inline`}></i>
                                <i className={`devicon-dot-net-plain-wordmark primary-content-icons d-inline`}></i>
                            </h4>
                            <h5 className= "primary-content-text sans-serif">October 2022 - Present</h5>
                            <ul className="mb-2">
                                <li className="text-start primary-content-text serif p-font-size my-2"><h6>Modernized Mail Innovations Notifications API from SOAP to RESTful</h6></li>
                                <li className="text-start primary-content-text serif p-font-size my-2"><h6>Modernized services to use OAuth header Authentication</h6></li>
                                <li className="text-start primary-content-text serif p-font-size my-2"><h6>Blah</h6></li>
                                <li className="text-start primary-content-text serif p-font-size my-2"><h6>Blah</h6></li>
                                <li className="text-start primary-content-text serif p-font-size my-2"><h6>Blah</h6></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                {/*Projects*/}
                <div className="link-text">
                    <h2 className= "primary-text header-deco sans-serif">Projects</h2>
                    <div className="align-items-center">
                        <button className= "btn btn-primary btn-lg override-bs sans-serif button-border project-button m-3"
                            onClick={() => setActiveTab("games")} >Games</button>
                        <button className= "btn btn-primary btn-lg override-bs sans-serif button-border project-button m-3"
                            onClick={() => setActiveTab("tech")}>Tech</button>
                    </div>
                    <div className={`row justify-content-center ${activeTab !== "games" ? 'd-none' : ''}`}>
                        {games.map((game) => {
                            return <ProjectCard item={game}></ProjectCard>
                        })}
                    </div>
                    <div className={`row justify-content-center ${activeTab !== "tech" ? 'd-none' : ''}`}>
                        {tech.map((project) => {
                            return <ProjectCard item={project}></ProjectCard>
                        })}
                    </div>
                </div>
                {/*Resume*/}
                <div className="pt-5 mb-5">
                    <a type="button" href="JodlowskiClaudia_Resume.docx" className="btn btn-primary btn-lg override-bs sans-serif button-border" download>Check Out My Resume</a>
                </div>
                </div>



        </div>
    )
}

export default Info;
