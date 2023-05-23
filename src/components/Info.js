import React from "react";

import '../vendors/bootstrap/css/bootstrap.min.css'
import '../vendors/fontawesome/css/all.min.css'

const Info = () => {
    return(
        <div className="col-12 col-md-8 col-lg-6 col-xl-6 my-2 d-flex justify-content-center text-center">
             {/* Header */}
             <div className="p2">
                <img src="" alt="logo" width="400px" height="100px"></img>
                <h1>Claudia Jodlowski</h1>
                <div>
                    <i className="fab fa-linkedin fa-lg icons"></i>
                    <i className="fab fa-github fa-lg icons"></i>
                    <i className="fab fa-itch-io fa-lg icons"></i>
                    <i className="fab  fa-twitter fa-lg icons"></i>
                    <i className="fas fa-solid fa-envelope fa-lg icons"></i>
                </div>
                <a>cnjodlowski@gmail.com</a>
                <a> (732) - 540 - 3526 </a>
             </div>

             {/* About me */}

        </div>

       
    )
}

export default Info;