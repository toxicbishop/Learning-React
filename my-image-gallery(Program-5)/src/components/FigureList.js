import React, { useState } from "react";
import BasicFigure from "./BasicFigure";

const FigureList = () => {
  const [figures, setFigures] = useState([
    {
      imageUrl: "https://picsum.photos/400?random=1",
      caption: "Serene Landscape",
    },
    {
      imageUrl: "https://picsum.photos/400?random=2",
      caption: "Urban Architecture",
    },
    {
      imageUrl: "https://picsum.photos/400?random=3",
      caption: "Mystic Forest",
    },
    { imageUrl: "https://picsum.photos/400?random=4", caption: "Ocean Breeze" },
  ]);

  const addFigure = () => {
    const newFigure = {
      imageUrl: `https://picsum.photos/400?random=${figures.length + 1}`,
      caption: `Random Masterpiece ${figures.length + 1}`,
    };
    setFigures([...figures, newFigure]);
  };

  const removeFigure = () => {
    if (figures.length > 0) {
      const updatedFigures = figures.slice(0, -1);
      setFigures(updatedFigures);
    }
  };

  return (
    <div className="figure-list-container">
      <div className="button-box">
        <button onClick={addFigure} className="action-button add">
          Add Image
        </button>
        <button onClick={removeFigure} className="action-button remove">
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
