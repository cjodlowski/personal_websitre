import React, { useState } from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

function ProjectCard({item}) {
    
    const [showDetails, setShowDetails] = useState(false);


    return(
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            {/* Hide On Screens Smaller Than Large - What We Had Before */}
            <div class={` col-11 col-sm-10 col-lg-5 col-xxl-4 card override-bs mb-3 mx-2 d-none d-lg-block`}>
                <h3 className="card-accent pl-2 pb-1 m-0">
                    <span className="primary-text sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    {item.icons.map((icon) => {
                        return <i className={`${icon} card-icons d-inline`}></i>
                    })}
                </h3>
                <hr className="card-line-deco"></hr>
                <div class="card-header override-bs">
                    <img src={item.screenshot} alt="logo"className="img-border card-img-style"></img>
                </div>
                <div class="card-body">
                    <h5 class="card-text serif">{item.summary}</h5>
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

            {/* Hide On Screens Larger Than Large - Title Only */}
            <div class={` col-11 col-sm-10 mb-3 mx-2 d-lg-none  ${showDetails ? "d-none" : ""}`}>
                <h3 className="card-accent pl-2 pb-1 m-0">
                    <i className ={`fas fa-solid fa-caret-down card-caret ${showDetails ? "rotate-down" : "rotate-right"}`} onClick={() => {
                        setShowDetails(!showDetails)
                    }} ></i>
                    <span className="primary-text sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    {item.icons.map((icon) => {
                        return <i className={`${icon} card-icons d-inline`}></i>
                    })}
                </h3>
                <hr className="card-line-deco"></hr>
            </div>

            {/* Hide On Screens Larger Than Large - Full Card Details*/}
            <div class={` col-11 col-sm-10 col-lg-5 col-xxl-4 card override-bs mb-3 mx-2  d-lg-none ${!showDetails ? "d-none" : ""}`}>
                <h3 className="card-accent pl-2 pb-1 m-0">
                    <i className ={`fas fa-solid fa-caret-down card-caret ${showDetails ? "rotate-down" : "rotate-right"}`} onClick={() => {
                        setShowDetails(!showDetails)
                    }} ></i>
                    <span className="primary-text sans-serif ml-2 my-2 hover-underline-animation">{item.title}</span>
                    {item.icons.map((icon) => {
                        return <i className={`${icon} card-icons d-inline`}></i>
                    })}
                </h3>
                <hr className="card-line-deco"></hr>
                <div class="card-header override-bs">
                    <img src={item.screenshot} alt="logo"className="img-border card-img-style"></img>
                </div>
                <div class="card-body">
                    <h5 class="card-text serif">{item.summary}</h5>
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