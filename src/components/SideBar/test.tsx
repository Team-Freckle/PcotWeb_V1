import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar, Segment } from "semantic-ui-react";
import Hamburger from "./Hamburger"; // Hamburger 컴포넌트 import
import Profile from "../../pages/Profile";

const SidebarTest: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Hamburger 아이콘 클릭 시 visible 값을 토글
  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      {/* Hamburger 아이콘을 클릭하여 toggleSidebar 함수를 호출하여 메뉴 토글 */}

      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Segment} animation="overlay" direction="left" visible={visible}></Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <Profile />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default SidebarTest;
