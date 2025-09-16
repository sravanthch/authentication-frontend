import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/userSlice";
import { Dialog } from "primereact/dialog";
import config from "../../server/config";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    let valid = true;
    setIsLoading(true);
    if (!username) {
      setUsernameError("Username is required.");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        const response = await fetch(`${config.apiBaseUrl}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: username, email, password }),
        });
        const result = await response.json();
        if (result?.data?.isEmailExists) {
          console.log("Response:", result);
          setShowDialog(true);
          return;
        }

        dispatch(
          setUserDetails({
            username: username || "",
            email: email,
            password: password,
          })
        );
        navigate(`/home`);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      console.log("Signup clicked");
    }
  };

  return (
    <div className="signup-container">
      <Card className="signup-card">
        <h3 className="signup-title">Create Account</h3>
        <p className="signup-subtitle">Join us today!</p>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="username">
              Username <span className="required">*</span>
            </label>
            <InputText
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <small className="error">{usernameError}</small>}
          </div>

          <div className="p-field">
            <label htmlFor="email">
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
            label="Sign Up"
            className="signup-button"
            onClick={handleSignup}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>

        <div className="login-link">
          <span>Already have an account?</span>
          <a onClick={() => navigate("/")}> Login</a>
        </div>
      </Card>
      <Dialog
        header="Email Error"
        visible={showDialog}
        style={{ width: "35vw" }}
        onHide={() => setShowDialog(false)}
        className="custom-dialog"
      >
        <p>
          Please use a different email as the entered email is already in use
        </p>
        <Button
          label="Ok"
          onClick={() => setShowDialog(false)}
          iconPos="center"
        />
      </Dialog>
    </div>
  );
};

export default SignupPage;
