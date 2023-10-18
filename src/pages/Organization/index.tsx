import { OrganizationWorkspaceList } from "@components/WorkspaceList/OrganizationWorkspaceList";
import React from "react";
import { useParams } from "react-router-dom";

export const Organization = () => {
  const { name } = useParams();

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <OrganizationWorkspaceList name={name} />
    </div>
  );
};
