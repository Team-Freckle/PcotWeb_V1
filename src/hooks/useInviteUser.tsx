import { ToastError, ToastSuccess, ToastWarning } from "@lib/Toast";
import React, { useCallback, useState } from "react";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useInviteUser = () => {
  const [Rank, setRank] = useState<string>("");
  const [Receiver, setReceiver] = useState<string>("");

  const URL = `${API_URL}/v2/cloud/organization/invite?organization=test-org&rank=leader&receiver=cksgur0612@dgsw.hs.kr`;

  const userInvite = async () => {
    try {
      const response = await axios.post(URL, {
        rank: Rank,
        receiver: Receiver,
      });

      ToastSuccess("초대 성공하였습니다.");
      return response.data;
    } catch (error) {
      ToastError("초대 실패했습니다.");
    }
  };

  return {
    Rank,
    Receiver,
    setRank,
    setReceiver,
  };
};
