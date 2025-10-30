import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Profile.css"; // create your own styles if needed

const Profile = () => {
  // const { username, email, password } = useSelector((state) => state.user);
  // const { password } = useSelector((state) => state.user);
  const [isChangePassword, setIsChangePassword] = useState(false)
  const onChangePasswordClick = () => {
    setIsChangePassword(true);
  }
  console.log(isChangePassword)
  return (
    <div className="profile-container">
      <Card title="My Profile" className="profile-card">
        <div className="profile-detail">
          <strong>Name:</strong> <span>{localStorage.getItem('username')}</span>
        </div>
        <div className="profile-detail">
          <strong>Email:</strong> <span>{localStorage.getItem('email')}</span>
        </div>

        <div className="profile-actions">
          <Button label="Change Password" onClick={onChangePasswordClick} icon="pi pi-lock" className="p-button-secondary" />
        </div>
      </Card>
    </div>
  );
};

export default Profile;
