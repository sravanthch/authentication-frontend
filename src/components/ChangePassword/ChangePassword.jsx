import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './ChangePassword.css';

const ChangePassword = ({ onCancel }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveClick = () => {
    // Validate that new password and confirm password match
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match. Please try again.');
      return;
    }

    if (newPassword.trim() === '') {
      alert('New password cannot be empty.');
      return;
    }

    // TODO: Send password change request to backend
    // For now, just show a success message
    alert('Password changed successfully!');
    resetForm();
    onCancel();
  };

  const handleCancelClick = () => {
    resetForm();
    onCancel();
  };

  const resetForm = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="change-password-form">
      <div className="form-group">
        <b><label htmlFor="currentPassword">Current Password:</label></b>
        <InputText
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <b><label htmlFor="newPassword">New Password:</label></b>
        <InputText
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <b><label htmlFor="confirmPassword">Confirm New Password:</label></b>
        <InputText
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};

export default ChangePassword;
