import { PopupModal } from "@components/Modal";
import React, { Dispatch, SetStateAction } from "react";

import * as S from "./style";

const PsdNodeModal = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <PopupModal active={active} setActive={setActive}>
        <S.MainBox>
          <div>
            <img src="" alt="" />
            <button></button>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </S.MainBox>
      </PopupModal>
    </div>
  );
};

export default PsdNodeModal;
