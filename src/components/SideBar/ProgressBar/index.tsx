import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressExampleActive = () => (
  <>
    Storage
    <Progress color="purple" progress percent={60} active size="small" />
  </>
);

export default ProgressExampleActive;
