import React, { useState } from "react";
// import './App.css';
import SideBar from "../SideBar/Sidebar";
import Profile from "@pages/Profile";

function MainSide() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="MainSide">
      <button onClick={closeMenu}>Close Menu</button>
      <SideBar isOpen={isOpen} onStateChange={handleStateChange} />
      <main>
        <Profile />
      </main>
    </div>
  );
}

export default MainSide;
