import React, { useState } from "react";
import { Sidebar, Segment } from "semantic-ui-react";
import Hamburger from "./Hamburger";
import MainSideBar from "../SideBar/index";
import Profile from "../../pages/Profile";

const SidebarTest = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={visible} closeMenu={closeMenu} />
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Segment} animation="overlay" direction="left" visible={visible} icon="labeled">
          <MainSideBar />
        </Sidebar>
        <Sidebar.Pusher dimmed={visible} onClick={closeMenu}>
          <Profile />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default SidebarTest;
