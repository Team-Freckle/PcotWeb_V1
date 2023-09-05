import React from "react";
import ReactDOM from "react-dom";
import SidebarExampleSidebar from "../../SideBar/Test/Testbox";

const App: React.FC = () => {
  return (
    <div>
      {/* 다른 컴포넌트를 추가할 수 있습니다. */}
      <SidebarExampleSidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
