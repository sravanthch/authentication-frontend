import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext"; // Import InputText for form fields
import "./Profile.css"; // create your own styles if needed

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the changes to localStorage or send to backend
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the fields to the original values
    setUsername(localStorage.getItem('username') || '');
    setEmail(localStorage.getItem('email') || '');
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <Card title="My Profile" className="profile-card">
        {isEditing ? (
          <div className="profile-edit">
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <InputText 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <InputText 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="profile-actions">
              <Button 
                label="Save" 
                onClick={handleSaveClick} 
                className="p-button-success" 
              />
              <Button 
                label="Cancel" 
                onClick={handleCancelClick} 
                className="p-button-secondary" 
              />
            </div>
          </div>
        ) : (
          <div className="profile-detail">
            <div>
              <strong>Name:</strong> <span>{username}</span>
            </div>
            <div>
              <strong>Email:</strong> <span>{email}</span>
            </div>
            <div className="profile-actions">
              <Button 
                label="Edit" 
                onClick={handleEditClick} 
                className="p-button-warning" 
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Profile;
