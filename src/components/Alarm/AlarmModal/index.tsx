import { PopupModal } from "@components/Modal";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAlarm } from "@hooks/useAlarm";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

const AlarmModal = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}) => {
  const { onGetAlarm } = useAlarm();
  const navigate = useNavigate();
  const [alarmList, setAlarmList] = useState<Array<any>>([]);

  useEffect(() => {
    onGetAlarm(1)
      .then((res: any) => {
        const alarmList = res.map((list: any) => (
          <div key={list.idx} style={{ textDecoration: "none" }}>
            {list.view === "Y" ? (
              <S.grayFilter>{box(list)}</S.grayFilter>
            ) : (
              <S.box>{box(list)}</S.box>
            )}
          </div>
        ));
        setAlarmList(alarmList);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const box = (list: any) => (
    <S.content onClick={() => navigate(`${list.path}`)}>
      <S.title>{list.text}</S.title>
      <S.path>{list.path}</S.path>
      <S.time>{list.registerTime}</S.time>
    </S.content>
  );

  const renderAlarmList = () => {
    return <div>{alarmList}</div>;
  };

  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <div>
          <S.modalType>Notification</S.modalType>
          <div>{renderAlarmList() ? renderAlarmList() : <div>알람을 찾을 수 없습니다!</div>}</div>
        </div>
      </PopupModal>
    </div>
  );
};

export default AlarmModal;
