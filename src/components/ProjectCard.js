import React, { useState } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

function ProjectCard({item}) {
    
    const [showDetails, setShowDetails] = useState(false);


    return(
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            {/* Desktop View - What We Had Before */}
            <div className={`card override-bs mb-3 mx-2 d-none d-lg-block`}>
                <h3 className="card-accent pl-2 pb-1 m-0">
                    <span className=" card-title text-break sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    {item.icons.map((icon) => {
                        return <i className={`${icon} card-icons d-inline`}></i>
                    })}
                </h3>
                <hr className="card-line-deco"></hr>
                <div>
                    <img src={item.screenshot} alt="logo"className="img-border card-img-style"></img>
                </div>
                <div className="card-body override-bs">
                    <h5 className="card-text serif">{item.summary}</h5>
                    <ul className="m-0">
                        {item.bullets.map((bullet) => {
                            return <li className="card-text serif text-start">{bullet}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <button className="mb-4 btn btn-primary btn-lg override-bs sans-serif button-border project-button">Check it out</button>
                </div>
            </div>

            {/* Mobile View- Title Only */}
            <div className={`mb-2 mx-2 d-lg-none   ${showDetails ? "d-none" : ""}`}>
                <h3 className="card-accent card-mini-header  text-break sans-serif pl-2 pb-1 m-0" onClick={() => {
                        setShowDetails(!showDetails)
                    }} tabindex={0}>
                    <i className ={`fas fa-solid fa-caret-down card-caret ${showDetails ? "rotate-down" : "rotate-right"}`} ></i>
                    <span className="card-title text-break sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    <div className="card-icons-div">
                        {item.icons.map((icon) => {
                            return <i className={`${icon} card-icons-mobile d-inline`}></i>
                        })}
                    </div>

                </h3>
            </div>

            {/* Mobile View - Full Card Details*/}
            <div className={`card card-mobile override-bs mb-3 mx-2 d-lg-none ${!showDetails ? "d-none" : ""}`}>
                <h3 className="card-accent pl-2 pb-1 m-0">
                    <i className ={`fas fa-solid fa-caret-down card-caret ${showDetails ? "rotate-down" : "rotate-right"}`} onClick={() => {
                        setShowDetails(!showDetails)
                    }} tabindex={0}></i>
                    <span className="card-title text-break sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    <div className="card-icons-div">
                        {item.icons.map((icon) => {
                            return <i className={`${icon} card-icons-mobile d-inline`}></i>
                        })}
                    </div>

                </h3>
                <hr className="card-line-deco"></hr>
                <div className="">
                    <img src={item.screenshot} alt="logo"className="img-border card-img-style-mobile"></img>
                </div>
                <div className="card-body-mobile override-bs">
                    <h5 className="card-text serif">{item.summary}</h5>
                    <ul className="m-0">
                        {item.bullets.map((bullet) => {
                            return <li className="card-text serif text-start">{bullet}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <button className="mb-4 btn btn-primary btn-lg override-bs sans-serif button-border project-button">Check it out</button>
                </div>
            </div>
        </>
    )    
}

export default ProjectCard;