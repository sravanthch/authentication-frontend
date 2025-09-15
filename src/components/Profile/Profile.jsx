import React from "react";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Profile.css"; // create your own styles if needed

const Profile = () => {
  const { username, email, password } = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <Card title="My Profile" className="profile-card">
        <div className="profile-detail">
          <strong>Name:</strong> <span>{username}</span>
        </div>
        <div className="profile-detail">
          <strong>Email:</strong> <span>{email}</span>
        </div>
        <div className="profile-detail">
          <strong>Password:</strong> <span>{'*'.repeat(password.length)}</span>
        </div>

        <div className="profile-actions">
          <Button label="Edit Profile" icon="pi pi-user-edit" className="p-button-primary" />
          <Button label="Change Password" icon="pi pi-lock" className="p-button-secondary" />
        </div>
      </Card>
    </div>
  );
};

export default Profile;
