import React, { useState } from 'react';

const ProfileCard = ({ name, bio, profilePicture }) => {
  const [bgColor, setBgColor] = useState('#f0f0f0');

  const handleMouseEnter = () => {
    setBgColor('#d1c4e9');
  };

  const handleMouseLeave = () => {
    setBgColor('#f0f0f0');
  };

  return (
    <div
      className="profile-card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="profile-picture"
      />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
