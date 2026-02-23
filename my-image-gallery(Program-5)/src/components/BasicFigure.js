import React from "react";

const BasicFigure = ({ imageUrl, caption }) => {
  return (
    <div className="figure">
      <div className="image-container">
        <img src={imageUrl} alt={caption} className="figure-image" />
      </div>
      <p className="figure-caption">{caption}</p>
    </div>
  );
};

export default BasicFigure;
