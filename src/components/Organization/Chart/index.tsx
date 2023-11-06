import React, { useEffect, useRef, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
export const API_URL = process.env.REACT_APP_API;
import axios from "axios";
import "./chart.css";

interface OrgData {
  name: string;
  floor: number;
  parent: string | null;
}

const MyOrgChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<OrgData[]>([]);

  const POST_URL = `${API_URL}/v2/cloud/organization/rank/edit/group-tester-org`;

  const postDataIfChanged = async (newData: OrgData[]) => {
    if (JSON.stringify(data) !== JSON.stringify(newData)) {
      try {
        const response = await axios.patch(POST_URL, { data: newData }, { withCredentials: true });
        console.log("데이터 업데이트 완료:", response.data);
        setData(newData);
      } catch (error) {
        console.error("데이터 업데이트 중 오류 발생:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/v2/search/organization/rank?organization=group-tester-org`,
          { withCredentials: true },
        );
        const jsonData = response.data;
        setData(jsonData.data as OrgData[]);
      } catch (error) {
        console.error("데이터를 가져오는 중에 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const orgChartNodes = data.map((item) => {
        return {
          name: item.name,
          floor: item.floor,
          parent: item.parent,
        };
      });

      postDataIfChanged(orgChartNodes);
    }
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default MyOrgChart;
