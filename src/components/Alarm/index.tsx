import React, { useState } from "react";
export const API_URL = process.env.REACT_APP_API;
import * as S from "./style";
import Bell from "@assets/Bell.png";
import AlarmModal from "./AlarmModal";

const Alarm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <S.AlarmBtn src={Bell} onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && <AlarmModal active={modalIsOpen} setActive={setModalIsOpen} />}
    </div>
  );
};

export default Alarm;
