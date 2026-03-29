import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="Kammavari Sangham"
        bio="K.S. School of Engineering and Management (KSSEM). The Sangham's long-standing 
commitment to education and community service is impressive, with a strong focus on providing 
quality education, supporting students through scholarships and free accommodation, and 
promoting social welfare through various other initiatives."
        profilePicture="https://kssem.edu.in/img/about/history.jpg"
      />
    </div>
  );
};
export default App;
