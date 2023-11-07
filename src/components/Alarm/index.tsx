import React, { useEffect, useState } from "react";
import axios from "axios";
export const API_URL = process.env.REACT_APP_API;
import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface OrgData {
  text: string;
  path: string;
  registerTime: string;
}

const Alarm = () => {
  const [data, setData] = useState<OrgData[]>([]);

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseClick = () => {
    setIsVisible(!isVisible);
  };

  function Testit({ title, path, time }: { title: string; path: string; time: string }) {
    const navigate = useNavigate();
    console.log(path);
    console.log(time);
    console.log(title);
    return (
      <>
        <S.content onClick={() => navigate(path)}>
          <S.title>{title}</S.title>
          <S.path>{path}</S.path>
          <S.time>{time}</S.time>
        </S.content>
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/v2/search/alarm/get?page=1`, {
          withCredentials: true,
        });
        const jsonData = response.data;
        setData(jsonData.data as OrgData[]);
      } catch (error) {
        console.error("데이터를 가져오는 중에 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <S.AlarmBtn onClick={handleMouseClick} />
      {isVisible && (
        <S.box>
          {data.map((orgData, index) => (
            <Testit
              title={orgData.text}
              path={orgData.path}
              time={orgData.registerTime}
              key={index}
            />
          ))}
        </S.box>
      )}
    </>
  );
};

export default Alarm;
