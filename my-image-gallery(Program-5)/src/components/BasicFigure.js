import React from "react";

const BasicFigure = ({ imageUrl, caption }) => {
  return (
    <div className="figure">
      <img src={imageUrl} alt={caption} className="figure-image" />
      <p className="figure-caption">{caption}</p>
    </div>
  );
};

export default BasicFigure;
