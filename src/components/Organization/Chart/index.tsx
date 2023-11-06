import React, { useEffect, useRef, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import axios from "axios";
import "./chart.css";

interface OrgData {
  name: string;
  floor: number;
  parent: string | null;
}

export const API_URL = process.env.REACT_APP_API;

const MyOrgChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<OrgData[]>([]);

  const PATCH_URL = `${API_URL}/v2/cloud/organization/rank/edit/group-tester-org`;

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
      OrgChart.templates.ana.field_0 =
        '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
      OrgChart.templates.ana.editFormHeaderColor = "#316ae2";
      const chart = new OrgChart(chartRef.current, {
        mouseScrool: OrgChart.action.none,
        nodeBinding: {
          field_0: "name",
        },
        align: OrgChart.ORIENTATION,
        tags: {
          assistant: {
            template: "ula",
          },
        },
        toolbar: {
          zoom: true,
          fit: true,
        },
        enableDragDrop: true,
        nodes: orgChartNodes,
        editForm: {
          buttons: {
            edit: null,
            share: null,
            pdf: null,
          },
          generateElementsFromFields: true,
        },
      });
    }
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default MyOrgChart;
