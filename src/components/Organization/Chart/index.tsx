import React from "react";

import * as S from "./style";
import Chart from "react-google-charts";
import axios from "axios";
export const API_URL = process.env.REACT_APP_API;
const OrganizationChart = () => {
  const apiUrl = "http://API_URL/v2/cloud/organization/rank/edit/test-org11";

  const data = [
    {
      name: "owner",
      floor: 0,
      parent: null,
    },
    {
      name: "leader",
      floor: 1,
      parent: "owner",
    },
    {
      name: "member",
      floor: 2,
      parent: "leader",
    },
  ];

  axios
    .patch(apiUrl, data)
    .then((response) => {
      console.log("성공적으로 업데이트되었습니다.", response.data);
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });

  const options = {
    allowHtml: true,
    allowCollapse: true,
  };

  return <Chart chartType="OrgChart" data={data} options={options} width="100%" />;
};

export default OrganizationChart;
