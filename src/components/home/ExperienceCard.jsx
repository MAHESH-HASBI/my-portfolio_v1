import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {

  const descriptionPoints = data.description.split('\n');
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
          <br />
        
        {/* Map over the description points and create separate <p> elements */}
        {descriptionPoints.map((point, index) => (
          <span key={index}>{point}<br /></span>
        ))}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;