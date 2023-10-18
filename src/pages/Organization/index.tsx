import { OrganizationWorkspaceList } from "@components/WorkspaceList/OrganizationWorkspaceList";
import React from "react";

export const Organization = () => {
  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <OrganizationWorkspaceList name="workspaces" />
    </div>
  );
};
