import React, { useState } from "react";
import { Sidebar, Segment } from "semantic-ui-react"; // semantic-ui-react 또는 프로젝트에 맞는 UI 라이브러리를 사용하세요
import Hamburger from "./Hamburger"; // Hamburger 컴포넌트를 가져옵니다.
import MainSideBar from "../SideBar/index"; // 메뉴바 컴포넌트를 가져옵니다.
import Profile from "../../pages/Profile";

const SidebarTest = () => {
  const [visible, setVisible] = useState(false);

  // toggleMenu 함수를 정의합니다.
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      {/* Hamburger 컴포넌트를 렌더링하고 toggleMenu 함수를 전달합니다. */}
      <Hamburger toggleMenu={toggleMenu} />
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Segment} animation="overlay" direction="left" visible={visible} icon="labeled">
          {/* MainSideBar 컴포넌트는 메뉴바의 내용을 렌더링합니다. */}
          <MainSideBar />
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          {/* 페이지 내용 */}
          <Profile />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default SidebarTest;
