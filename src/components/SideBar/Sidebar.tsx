import React from "react";
import { slide as Menu } from "react-burger-menu";
import SideBarOptions from "./SideBarOptions";

interface SideBarProps {
  isOpen: boolean;
  onStateChange: (state: { isOpen: boolean }) => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onStateChange }) => {
  return (
    <Menu isOpen={isOpen} onStateChange={onStateChange}>
      <SideBarOptions />
    </Menu>
  );
};

export default SideBar;
