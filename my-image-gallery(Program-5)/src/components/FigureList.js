import React, { useState } from "react";
import BasicFigure from "./BasicFigure";

const FigureList = () => {
  const [figures, setFigures] = useState([
    { imageUrl: "https://picsum.photos/400", caption: "Random Image 1" },
    { imageUrl: "https://picsum.photos/400", caption: "Random Image 2" },
    { imageUrl: "https://picsum.photos/400", caption: "Random Image 3" },
    { imageUrl: "https://picsum.photos/400", caption: "Random Image 4" },
  ]);

  const addFigure = () => {
    const newFigure = {
      imageUrl: `https://picsum.photos/400?random=${figures.length + 1}`,
      caption: `Random Image ${figures.length + 1}`,
    };
    setFigures([...figures, newFigure]);
  };

  const removeFigure = () => {
    const updatedFigures = figures.slice(0, -1);
    setFigures(updatedFigures);
  };

  return (
    <div className="figure-list-container">
      <div className="button-box">
        <button onClick={addFigure} className="action-button">
          Add Image
        </button>
        <button onClick={removeFigure} className="action-button">
          Remove Image
        </button>
      </div>
      <div className="figure-list">
        {figures.map((figure, index) => (
          <BasicFigure
            key={index}
            imageUrl={figure.imageUrl}
            caption={figure.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
