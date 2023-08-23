import axios from "axios";
import { ToastError } from "../lib/Toast";

export const API_URL = process.env.REACT_APP_API;

const useEmailVerify = (Email: string) => {
  const URL = `${API_URL}/v2/mail/auth/send`;
  try {
    axios.post(URL, {
      email: Email,
    });
    ToastError("이메일 전송에 성공했습니다.");
  } catch (error) {
    ToastError("이메일 전송에 실패했습니다.");
  }
};

export default useEmailVerify;
