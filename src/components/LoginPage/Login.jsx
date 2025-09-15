import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { useNavigate } from "react-router-dom";
import "./Login.css";

import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/userSlice";
import config from "../../server/config";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ✅ New: Combined form validation function
  const validateForm = () => {
    let valid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleLogin = async () => {
  const isValid = validateForm();

  if (!isValid) return;

  setLoading(true); // Start spinner


try {
  const response = await fetch(`${config.apiBaseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  console.log({ data });

  if (data?.data) {
    console.log("Login success:", data);
    dispatch(
      setUserDetails({
        username: data.data.name || "",
        email: email,
        password: password,
      })
    );
    navigate(`/home`);
  } else {
    console.error("Login failed:", data.message);
    setShowDialog(true);
  }
} catch (err) {
  console.error("API error:", err);
  setShowDialog(true);
} finally {
  setLoading(false); // Stop spinner
}
};


  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to your account</p>
        <div className="p-fluid">
          <div className="p-field">
            <label>
              Email <span className="required">*</span>
            </label>
            <InputText
              id="email"
              placeholder="Enter your email : myname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <small className="error">{emailError}</small>}
          </div>

          <div className="p-field password-field">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="custom-password-input"
              />
              {password.length > 0 && (
                <i
                  className={`pi ${
                    showPassword ? "pi-eye-slash" : "pi-eye"
                  } password-toggle-icon`}
                  onClick={togglePassword}
                />
              )}
            </div>
            {passwordError && <small className="error">{passwordError}</small>}
          </div>

          <Button
            label="Login"
            className="login-button"
            onClick={handleLogin}
            loading={loading}
            disabled={loading}
          />
        </div>

        <div className="signup-link">
          <span>Don't have an account?</span>
          <a onClick={() => navigate("/signup")}> Sign up</a>
        </div>

        <Dialog
          header="Invalid Credentials"
          visible={showDialog}
          style={{ width: "35vw" }}
          onHide={() => setShowDialog(false)}
          className="custom-dialog"
        >
          <p>
            Please check your username and password, or sign up if you don't
            have an account."
          </p>
          <Button
            label="Ok"
            onClick={() => setShowDialog(false)}
            iconPos="center"
          />
        </Dialog>
      </Card>
    </div>
  );
};

export default LoginPage;
