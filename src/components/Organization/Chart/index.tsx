import React, { useEffect, useRef, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
export const API_URL = process.env.REACT_APP_API;
import axios from "axios";

interface OrgData {
  name: string;
  floor: number;
  parent: string | null;
}

const MyOrgChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<OrgData[]>([]);

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
          id: item.name,
          name: item.name,
          pid: item.parent || item.floor.toString(),
        };
      });

      const chart = new OrgChart(chartRef.current, {
        mouseScrool: OrgChart.action.none,
        nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img",
        },
        tags: {
          assistant: {
            template: "ula",
          },
        },
        // nodeMenu: {
        //   details: { text: "Details" },
        //   edit: { text: "Edit" },
        //   add: { text: "Add" },
        //   remove: { text: "Remove" },
        //   assistant: { text: "Assistant" },
        // },
        enableDragDrop: true,
        nodes: orgChartNodes,
      });
    }
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default MyOrgChart;
