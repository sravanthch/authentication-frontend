import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import 'primeicons/primeicons.css';


const Home = () => {
  const navigate = useNavigate();

  // const username = useSelector((state) => state.user.username);
  const username = localStorage.getItem('username')

  const logout = () => {
    navigate("/");
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
    },
  ];

  return (
    <div className="home-container">
      <Menubar
        model={menuItems}
        end={
          <div className="logout-wrapper">
            <Button
              label="Logout"
              icon="pi pi-sign-out"
              iconPos="left"
              className="p-button-danger p-button-sm no-extra-padding"
              onClick={logout}
            />
          </div>
        }
        className="custom-menubar"
      />

      <div className="home-content">
        <Card title={`Welcome, ${username || "User"}!`} className="home-card">
          <p>
            You have successfully logged in. This is your landing page where you
            can navigate to different parts of the app.
          </p>
          <Button label="Get Started" iconPos="left" icon="pi pi-arrow-right" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
