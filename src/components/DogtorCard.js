import React from "react";
import { Image } from "react-bootstrap"
import "./dogtorcard.css";

function DogtorCard({ image, title, tagline, description, buttonText }) {
  return (
    <div className="dogtor-card">
      <div className="dogtor-card-img-box">
        <Image className="card-img" src={image} />
      </div>

      <div className="dogtor-card-data">
        <h6 className="dogtor-card-title">{title}</h6>
        <p className="dogtor-card-tagline">{tagline}</p>
        <p className="dogtor-card-description">{description}</p>
        <div className="dogtor-card-btn-box">
          <button>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogtorCard;
