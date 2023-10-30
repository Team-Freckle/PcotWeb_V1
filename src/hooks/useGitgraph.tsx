import React, { useState } from "react";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useSignin = () => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [parentName, setParentName] = useState<any>("");

  const URL = `${API_URL}/v2/cloud/node/create/aws-test-org/test-work`;
};
