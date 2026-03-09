import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="vtucircle"
        bio="vtucircle is the website which provides all the required VTU notes, syllabus, model papers, previous 
             year papers of 2021 | 2022 scheme for BE students."
        profilePicture="https://vtucircle.com/storage/2024/11/cropped-vtucircle_icon-1.png"
      />
    </div>
  );
};

export default App;
